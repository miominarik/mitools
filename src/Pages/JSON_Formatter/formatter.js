function JsonFormatter() {

    const format_json = event => {
        const json_data = event.target.value;
        if (json_data !== "" && json_data !== undefined && json_data !== null) {
            let final_json = "";
            try {
                final_json = JSON.stringify(JSON.parse(json_data), null, 4);
            } catch (error) {
                final_json = 'Invalid JSON format: ' + error.message
            }
            if (final_json) {
                document.getElementById("message2").value = final_json;
            }
        } else {
            document.getElementById("message2").value = "";
        }
    }

    return (
        <div>
            <strong className="text-xl">JSON Formatter</strong>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Input</label>
                            <textarea
                                id="message1"
                                className="w-full h-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Paste here your minified JSON"
                                onChange={format_json}
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
                                placeholder="Formatted result"
                                disabled={true}
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default JsonFormatter;
