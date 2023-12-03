import {useState, useEffect} from "react";

function Home() {
    const [pickedQuote, setpickedQuote] = useState("");


    useEffect(() => {
        const fetchFile = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_URL + '/Quotes.json');
                const data = await response.text();
                if (data) {
                    const decoded_json = JSON.parse(data);
                    if (decoded_json) {
                        const randomIndex = Math.floor(Math.random() * decoded_json.length);
                        if (randomIndex) {
                            const text_complete = '„' + decoded_json[randomIndex].quote + '“ - ' + decoded_json[randomIndex].author;
                            setpickedQuote(text_complete)
                        }
                    }

                }
            } catch (error) {
                console.error('Chyba pri načítaní súboru:', error);
            }
        };
        fetchFile();
    }, []);

    return (
        <div className="text-center py-36">
            <span className="text-5xl text-gray-700 dark:text-white font-thin">„All tools a developer needs at one place“</span>
            <div className="text-1xl text-grey-700 dark:text-white font-thin mt-3">{pickedQuote}</div>
        </div>
    );
}

export default Home;
