function CssTools() {

    const minify_css = event => {
        const formated_css = event.target.value;
        if (formated_css !== "" && formated_css !== undefined && formated_css !== null) {
            let minified_css = "";
            try {
                minified_css = minifyCSS(formated_css);
            } catch (error) {
                minified_css = 'Invalid Text: ' + error.message
            }
            if (minified_css) {
                document.getElementById("message2").value = minified_css;
            }
        } else {
            document.getElementById("message2").value = "";
        }
    }

    function minifyCSS(css) {
        return css.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '') // Odstráň komentáre
            .replace(/\s+/g, ' ') // Nahraď viacero medzier jednou
            .replace(/: /g, ':') // Odstráň medzeru medzi vlastnosťou a hodnotou
            .replace(/{ /g, '{') // Odstráň medzeru pred začiatkom bloku
            .replace(/ }/g, '}') // Odstráň medzeru pred koncom bloku
            .replace(/; /g, ';') // Odstráň medzeru medzi pravidlami
            .trim(); // Odstráň začiatočné a koncové medzery
    }

    function formatCSS(css) {
        let result = '';
        let indent = 0;

        for (let i = 0; i < css.length; i++) {
            const char = css[i];

            if (char === '{') {
                result += '{\n';
                indent += 2;
                result += ' '.repeat(indent);
            } else if (char === '}') {
                result += '\n';
                indent -= 2;
                result += ' '.repeat(indent);
                result += '}\n';
                result += ' '.repeat(indent);
            } else if (char === ';') {
                result += ';\n';
                result += ' '.repeat(indent);
            } else {
                result += char;
            }
        }

        return result;
    }

    const css_formatter = event => {
        const css_minified_text = event.target.value;
        if (css_minified_text !== "" && css_minified_text !== undefined && css_minified_text !== null) {
            let formated_css = "";
            try {
                formated_css = formatCSS(css_minified_text);
            } catch (error) {
                formated_css = 'Invalid css string: ' + error.message
            }
            if (formated_css) {
                document.getElementById("message4").value = formated_css;
            }
        } else {
            document.getElementById("message4").value = "";
        }
    }

    return (
        <div>
            <strong className="text-xl text-gray-700 dark:text-white">CSS Minifier</strong>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-white font-semibold">Input</label>
                            <textarea
                                id="message1"
                                className="w-full h-96 bg-white dark:bg-slate-800 text-gray-700 dark:text-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Paste here your formated CSS"
                                onChange={minify_css}
                            ></textarea>
                        </div>
                    </form>
                </div>
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-white font-semibold">Result</label>
                            <textarea
                                id="message2"
                                className="w-full h-96 bg-white dark:bg-slate-800 text-gray-700 dark:text-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="CSS minified result"
                                disabled={true}
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <hr/>
            <strong className="text-xl text-gray-700 dark:text-white">CSS Formatter</strong>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-white font-semibold">Input</label>
                            <textarea
                                id="message3"
                                className="w-full h-96 bg-white dark:bg-slate-800 text-gray-700 dark:text-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Paste here CSS minified string"
                                onChange={css_formatter}
                            ></textarea>
                        </div>
                    </form>
                </div>
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-white font-semibold">Result</label>
                            <textarea
                                id="message4"
                                className="w-full h-96 bg-white dark:bg-slate-800 text-gray-700 dark:text-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="CSS formated result"
                                disabled={true}
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CssTools;
