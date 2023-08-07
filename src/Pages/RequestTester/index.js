import axios from 'axios';

function RequestTester() {

    function displayResponse(responseData) {
        const responseDiv = document.getElementById("request_result");
        responseDiv.innerHTML = "";

        if (typeof responseData === "string") {
            responseDiv.innerText = responseData;
        } else if (responseData instanceof Object) {
            responseDiv.innerText = JSON.stringify(responseData, null, 4);
        } else if (typeof responseData === "number" || typeof responseData === "boolean") {
            responseDiv.innerText = responseData.toString();
        } else if (responseData === null) {
            responseDiv.innerText = "Null";
        } else {
            responseDiv.innerText = "Empty Response";
        }
    }

    const send_request = () => {
        const allowed_request_type = ["GET", "POST", "PUT", "PATCH", "DELETE"];
        const request_type = document.getElementById("request_type").value;
        const request_url = document.getElementById("request_url").value;
        const request_body = document.getElementById("request_body").value;


        if ((request_type !== "" && request_type !== undefined && request_type !== null) && (request_url !== "" && request_url !== undefined && request_url !== null)) {
            if (allowed_request_type.includes(request_type)) {
                async function sendGetRequest(url) {
                    try {
                        const response = await axios.get(url);
                        return response.data;
                    } catch (error) {
                        return error;

                    }
                }

                async function sendPostRequest(url, data) {
                    try {
                        const response = await axios.post(url, data);
                        return response.data;
                    } catch (error) {
                        console.error("Chyba pri POST požiadavke:", error);
                    }
                }

                async function sendPutRequest(url, data) {
                    try {
                        const response = await axios.put(url, data);
                        return response.data;
                    } catch (error) {
                        console.error("Chyba pri PUT požiadavke:", error);
                    }
                }

                async function sendPatchRequest(url, data) {
                    try {
                        const response = await axios.patch(url, data);
                        return response.data;
                    } catch (error) {
                        console.error("Chyba pri PATCH požiadavke:", error);
                    }
                }

                async function sendDeleteRequest(url) {
                    try {
                        const response = await axios.delete(url);
                        return response.data;
                    } catch (error) {
                        console.error("Chyba pri DELETE požiadavke:", error);
                    }
                }

                switch (request_type) {
                    case "GET":
                        sendGetRequest(request_url)
                            .then((data) => {
                                displayResponse(data)
                            });
                        break;
                    case "POST":
                        sendPostRequest(request_url, request_body)
                            .then((data) => {
                                displayResponse(data)
                            });
                        break;
                    case "PUT":
                        sendPutRequest(request_url, request_body)
                            .then((data) => {
                                displayResponse(data)
                            });
                        break;
                    case "PATCH":
                        sendPatchRequest(request_url, request_body)
                            .then((data) => {
                                displayResponse(data)
                            });
                        break;
                    case "DELETE":
                        sendDeleteRequest(request_url)
                            .then((data) => {
                                displayResponse(data)
                            });
                        break;
                    default:
                        sendGetRequest(request_url)
                            .then((data) => {
                                displayResponse(data)
                            });
                        break;
                }

            }
        }

    }

    return (
        <div>
            <strong className="text-xl">Request Tester</strong>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                <div className="col-span-1 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold py-4">Request Type</label>
                        <select id="request_type"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="PATCH">PATCH</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-3 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold py-4">URL</label>
                        <input type="text"
                               id="request_url"
                               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"/>
                    </div>
                </div>
                <div className="col-span-2 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Body</label>
                        <textarea
                            id="request_body"
                            className="w-full h-80 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                </div>
                <div className="col-span-2 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Result</label>
                        <textarea
                            id="request_result"
                            className="w-full h-80 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            disabled={true}
                        ></textarea>
                    </div>
                </div>
                <div className="col-span-4 ps-4">
                    <div className="mb-4">
                        <button type="button" className="rounded-2xl bg-green-500 hover:bg-green-400 p-4"
                                onClick={send_request}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestTester;
