import {Base64} from 'js-base64';

function Base64EncodeDecode() {

    const encode_base64 = event => {
        const base64_text = event.target.value;
        if (base64_text !== "" && base64_text !== undefined && base64_text !== null) {
            let final_base64 = "";
            try {
                final_base64 = Base64.btoa(base64_text);
            } catch (error) {
                final_base64 = 'Invalid Text: ' + error.message
            }
            if (final_base64) {
                document.getElementById("message2").value = final_base64;
            }
        } else {
            document.getElementById("message2").value = "";
        }
    }

    const decode_base64 = event => {
        const base64_text = event.target.value;
        if (base64_text !== "" && base64_text !== undefined && base64_text !== null) {
            let final_base64 = "";
            try {
                final_base64 = Base64.atob(base64_text);
            } catch (error) {
                final_base64 = 'Invalid Bae64 string: ' + error.message
            }
            if (final_base64) {
                document.getElementById("message4").value = final_base64;
            }
        } else {
            document.getElementById("message4").value = "";
        }
    }

    return (
        <div>
            <strong className="text-xl">Base64 Encode</strong>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Input</label>
                            <textarea
                                id="message1"
                                className="w-full h-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Paste here your text"
                                onChange={encode_base64}
                            ></textarea>
                        </div>
                    </form>
                </div>
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Result</label>
                            <textarea
                                id="message2"
                                className="w-full h-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Base64 result"
                                disabled={true}
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <hr/>
            <strong className="text-xl">Base64 Decode</strong>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Input</label>
                            <textarea
                                id="message3"
                                className="w-full h-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Paste here Base64 string"
                                onChange={decode_base64}
                            ></textarea>
                        </div>
                    </form>
                </div>
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Result</label>
                            <textarea
                                id="message4"
                                className="w-full h-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Decoded result"
                                disabled={true}
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Base64EncodeDecode;
