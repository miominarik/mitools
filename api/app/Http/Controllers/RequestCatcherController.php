<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Pusher\Pusher;
use Ramsey\Uuid\Uuid;

class RequestCatcherController extends Controller
{
    public function CreateUUID(Request $request)
    {
        $validate = $request->validate([
            "uuid" => "uuid|required"
        ]);

        if (isset($validate['uuid']) && !empty($validate['uuid'])) {
            $uuid = Uuid::uuid5($validate['uuid'], env("APP_KEY"));
            if (!empty($uuid)) {
                $jsonFilename = 'public/keys/' . $uuid . '.json';

                Storage::disk('local')->put($jsonFilename, json_encode([]));

                return response()->json([
                    "url" => $uuid
                ], 202);
            }
        }
    }

    public function CatchRequest(Request $request, string $uuid)
    {
        if (!empty($uuid)) {
            $jsonFilename = 'public/keys/' . $uuid . '.json';

            if (!Storage::exists($jsonFilename)) {
                Storage::disk('local')->put($jsonFilename, json_encode([]));
            }

            $actual_data = Storage::get($jsonFilename);
            $actual_data = json_decode($actual_data, TRUE);

            array_push($actual_data, [
                "method" => $request->method(),
                "url" => $request->url(),
                "data" => $request->all(),
                "headers" => $request->headers->all(),
                "time" => Carbon::now()->format("d.m.Y H:i:s"),
            ]);
            $encode_text = json_encode($actual_data);
            Storage::put($jsonFilename, $encode_text);

            $options = array(
                'host' => env("PUSHER_HOST"),
                'port' => env("PUSHER_PORT"),
                'scheme' => env("PUSHER_SCHEME"),
                'encrypted' => TRUE,
                'useTLS' => env("PUSHER_TLS"),
            );
            $pusher = new Pusher(env("PUSHER_APP_KEY"), env("PUSHER_APP_SECRET"), env("PUSHER_APP_ID"), $options);

            $data['message'] = $encode_text;
            $pusher->trigger($uuid, 'Mitools', $encode_text);

        }

        return response()->json([
            "status" => "success"
        ], 202);

    }
}
