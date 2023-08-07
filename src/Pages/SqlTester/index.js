const sql_parser = require('js-sql-parser');


function SQLTester() {

    const VerifySQL = event => {
        const sql_query = event.target.value;
        if (sql_query !== "" && sql_query !== undefined && sql_query !== null) {
            let chyby = [];


            let parsedQuery = "";
            try {
                // Parsujeme SQL dotaz pomocou sql-parser knižnice
                let parsedQuery = sql_parser.parse(sql_query);
            } catch (e) {
                chyby.push({pozicia: null, sprava: e});
            }

            // Získame všetky identifikátory funkcií z SQL dotazu
            const funkcie = getAllFunctions(parsedQuery);

            if (funkcie.length > 0) {
                for (const funkcia of funkcie) {
                    chyby.push({pozicia: null, sprava: `Nepovolená funkcia "${funkcia}" v SQL dotaze.`});
                }
            }

            let final_text = "";

            if (chyby.length > 0) {
                chyby.forEach((one) => {
                    final_text += one.sprava + "\n";
                })
                document.getElementById("sql_result").innerHTML = final_text;
            } else {
                document.getElementById("sql_result").innerHTML = "SQL query is fine";
            }
        } else {
            document.getElementById("sql_result").innerHTML = "";
        }
    }

    function getAllFunctions(obj) {
        let funkcie = [];

        if (obj.type === "function") {
            funkcie.push(obj.name);
        }

        for (const key in obj) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                funkcie = funkcie.concat(getAllFunctions(obj[key]));
            }
        }

        return funkcie;
    }

    return (
        <div>
            <strong className="text-xl">Request Tester</strong>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                <div className="col-span-4 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold py-4">SQL query</label>
                        <textarea
                            id="sql_input"
                            className="w-full h-72 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Paste your sql query"
                            onChange={VerifySQL}
                        ></textarea>
                    </div>
                </div>
                <div className="col-span-4 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold py-4">SQL result</label>
                        <textarea
                            id="sql_result"
                            className="w-full h-72 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            disabled={true}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SQLTester;
