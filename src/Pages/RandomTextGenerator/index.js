import FireAlert from "../../Components/Alerts";

function RandomTextGenerator() {
    const generateRandomText = () => {
        const paragraphsOrWords = document.getElementById('text_type').value;
        const count = document.getElementById('text_count').value;
        const words = [
            'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Nullam', 'massa', 'neque', 'cursus', 'eget', 'egestas', 'vel', 'lacinia', 'purus', 'Ut', 'sollicitudin', 'enim', 'non', 'ex', 'interdum', 'a', 'gravida', 'arcu', 'Maecenas', 'ac', 'turpis', 'in', 'justo', 'auctor', 'vestibulum', 'nec', 'vitae', 'felis', 'Pellentesque', 'rutrum', 'ante', 'leo', 'dapibus', 'accumsan', 'sem', 'ornare', 'Vivamus', 'congue', 'ante', 'rhoncus', 'tortor', 'massa', 'vehicula', 'In', 'eros', 'egestas', 'finibus', 'cursus', 'Nam', 'erat', 'tellus', 'feugiat', 'commodo', 'et', 'odio', 'eleifend', 'aliquet', 'tempor', 'orci', 'Duis', 'molestie', 'eros', 'luctus', 'augue', 'iaculis', 'Pellentesque', 'aliquam', 'justo', 'fermentum', 'finibus', 'sollicitudin', 'nunc', 'libero', 'risus', 'sagittis', 'libero', 'feugiat', 'turpis', 'eget', 'variust', 'libero', 'Praesent', 'leo', 'scelerisque', 'malesuada', 'urna', 'risus', 'quis', 'finibus', 'Vivamus', 'imperdiet', 'augue', 'bibendum', 'blandit', 'dolor', 'lorem', 'neque', 'congue', 'ante', 'Fusce', 'nec', 'interdum', 'est', 'non', 'euismod', 'massa', 'Nulla', 'sapien', 'ultricies', 'porttitor', 'nec', 'libero', 'Aliquam', 'tristique', 'mi', 'at', 'porta', 'mi', 'Curabitur', 'id', 'orci', 'metus', 'faucibus', 'egestas', 'vestibulum', 'ac', 'ligula', 'fermentum', 'lectus', 'Vivamus', 'tortor', 'felis', 'viverra', 'nunc', 'ullamcorper', 'mauris', 'Morbi', 'placerat', 'purus', 'a', 'eros', 'consectetur', 'Donec', 'nec', 'tristique', 'massa', 'nunc', 'facilisis', 'at', 'magna', 'sollicitudin', 'fringilla', 'Integer', 'urna', 'aliquet', 'accumsan', 'mi', 'elementum', 'Etiam', 'vestibulum', 'mi', 'tristique', 'ornare', 'vel', 'lectus', 'Duis', 'tortor', 'viverra', 'quis', 'nunc', 'Morbi', 'placerat', 'purus', 'a', 'eros', 'porttitor', 'nec', 'massa', 'Donec', 'vel', 'pretium', 'nulla', 'Quisque', 'lacus', 'luctus', 'rutrum', 'quam', 'id', 'pellentesque', 'sodales', 'Proin', 'ac', 'luctus', 'augue', 'eleifend', 'enim', 'sodales', 'nisl', 'ex', 'blandit', 'cursus', 'magna', 'ultricies', 'vitae', 'Proin', 'tempor', 'mollis', 'augue', 'Integer', 'ac', 'ultricies', 'velit', 'Fusce', 'et', 'non', 'lectus', 'scelerisque', 'viverra', 'arcu', 'Vestibulum', 'massa', 'ullamcorper', 'pharetra', 'porttitor', 'Etiam', 'vestibulum', 'mi', 'ac', 'vestibulum', 'nec', 'Duis', 'tincidunt', 'vel', 'nisi', 'ut', 'Mauris', 'lacinia', 'id', 'leo', 'hendrerit', 'neque', 'Maecenas', 'enim', 'facilisis', 'lobortis', 'ante', 'imperdiet', 'rutrum', 'Nulla', 'eu', 'orci', 'elit', 'Mauris', 'lectus', 'faucibus', 'ornare', 'Etiam', 'vestibulum', 'mi', 'ac', 'vestibulum', 'rhoncus', 'volutpat', 'quis', 'leo', 'Sed', 'sollicitudin', 'id', 'elit', 'at', 'ultrices', 'libero', 'Aliquam', 'et', 'tristique', 'dui', 'at', 'porta', 'mi', 'Vivamus', 'est', 'sapien', 'dictum', 'non', 'enim', 'congue', 'convallis', 'Mauris', 'lectus', 'faucibus', 'etiam', 'porta', 'Fusce', 'et', 'ipsum', 'non', 'lectus', 'scelerisque', 'lobortis', 'vel', 'viverra', 'arcu', 'Vestibulum', 'lacinia', 'nec', 'massa', 'ullamcorper', 'pharetra', 'Nullam', 'vestibulum', 'mollis', 'suscipit', 'Curabitur', 'id', 'orci', 'nec', 'metus', 'faucibus', 'egestas', 'Vivamus', 'erat', 'venenatis', 'vitae', 'eu', 'dapibus', 'blandit', 'Nulla', 'suscipit', 'velit', 'eget', 'dolor', 'tristique', 'varius', 'Etiam', 'odio', 'nisl', 'suscipit', 'non', 'consequat', 'in', 'commodo', 'ut', 'ex', 'Phasellus', 'molestie', 'efficitur', 'eros', 'maximus', 'Suspendisse', 'faucibus', 'ullamcorper', 'sem', 'efficitur', 'eu', 'Sed', 'sollicitudin', 'id', 'elit', 'at', 'ultrices', 'Vestibulum', 'vel', 'dolor', 'vitae', 'est', 'rhoncus', 'volutpat', 'quis', 'leo', 'Vivamus', 'sodales', 'nisl', 'ex', 'blandit', 'cursus', 'ultricies', 'quis', 'Proin', 'tempor', 'mollis', 'augue', 'vitae', 'molestie', 'Nulla', 'imperdiet', 'dui', 'ut', 'massa', 'scelerisque', 'porta', 'nibh', 'iaculis', 'Praesent', 'nisl', 'tortor', 'auctor', 'vel', 'erat', 'placerat', 'efficitur', 'Maecenas', 'at', 'nulla', 'eu', 'purus', 'malesuada', 'venenatis', 'porttitor', 'elementum', 'massa', 'vel', 'sagittis', 'Nullam', 'vestibulum', 'mollis', 'suscipit'
        ];


        let randomText = '';

        if (paragraphsOrWords === 'paragraphs') {
            for (let p = 0; p < count; p++) {
                const paragraphLength = Math.floor(Math.random() * (100 - 50 + 1) + 50);

                for (let i = 0; i < paragraphLength; i++) {
                    const randomWordIndex = Math.floor(Math.random() * words.length);
                    const word = words[randomWordIndex];
                    randomText += word + ' ';
                }

                randomText += '\n\n';
            }
        } else if (paragraphsOrWords === 'words') {
            const totalWords = count;

            for (let i = 0; i < totalWords; i++) {
                const randomWordIndex = Math.floor(Math.random() * words.length);
                const word = words[randomWordIndex];
                randomText += word + ' ';
            }
        } else {
            return 'Wrong attr. Use only "paragraphs" or "words".';
        }

        let random_text = randomText.trim();

        random_text = random_text.charAt(0).toUpperCase() + random_text.slice(1);
        const letter_counter = random_text.length;

        document.getElementById("text_result").innerHTML = random_text;
        document.getElementById("letter_counter").innerText = letter_counter;
    }
    
    const copyRandomText = () => {
        
        const textarea = document.getElementById('text_result');
        textarea.disabled = false;
        textarea.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        textarea.disabled = true;
        FireAlert("success", "Text was copied")
    }

    return (
        <div>
            <strong className="text-xl">Random Text Generator</strong>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                <div className="col-span-1 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold py-4">Count</label>
                        <input
                            type="number"
                            id="text_count"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            defaultValue={5}
                            min="1"
                            max="255"
                            onChange={generateRandomText}
                        ></input>
                    </div>
                </div>
                <div className="col-span-1 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold py-4">Type</label>
                        <select
                            id="text_type"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            onChange={generateRandomText}
                        >
                            <option value="paragraphs">Paragraphs</option>
                            <option value="words">Words</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-1 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold py-4">Letter counter</label>
                        <strong id="letter_counter">0</strong>
                    </div>
                </div>
                <div className="col-span-1 p-4">
                    <div className="mb-4">
                        <button type="button" className="rounded-2xl bg-blue-400 hover:bg-blue-500 p-2 mt-14" onClick={generateRandomText}>Generate</button>
                        <button type="button" className="rounded-2xl bg-orange-400 hover:bg-orange-500 ml-2 p-2 mt-14" onClick={copyRandomText}>Copy text</button>
                    </div>
                </div>
                <div className="col-span-4 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold py-4">SQL result</label>
                        <textarea
                            id="text_result"
                            className="w-full h-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            disabled={true}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RandomTextGenerator;
