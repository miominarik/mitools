import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import JsonFormatter from "./Pages/JSON_Formatter/formatter";
import JsonMinifier from "./Pages/JSON_Formatter/minifier";
import RequestTester from "./Pages/RequestTester";
import Base64EncodeDecode from "./Pages/Base64_EncodeDecode";
import SQLTester from "./Pages/SqlTester";
import RandomTextGenerator from "./Pages/RandomTextGenerator";
import RequestCatcher from "./Pages/RequestCatcher";
import CssTools from "./Pages/CssTools";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/json_formatter" element={<JsonFormatter />} />
                <Route path="/json_minifier" element={<JsonMinifier />} />
                <Route path="/base64_encodedecode" element={<Base64EncodeDecode />} />
                <Route path="/request_tester" element={<RequestTester />} />
                <Route path="/request_catcher" element={<RequestCatcher />} />
                <Route path="/sql_tester" element={<SQLTester />} />
                <Route path="/random_text_generator" element={<RandomTextGenerator />} />
                <Route path="/css_tools" element={<CssTools />} />
            </Routes>
        </>
    )
}

export default Router;