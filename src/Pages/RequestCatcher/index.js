import axios from 'axios';
import {useEffect, useState} from "react";
import FireAlert from "../../Components/Alerts";
import {v4 as uuidv4} from 'uuid';

function RequestCatcher() {
    useEffect(() => {
        const GenerateCatchUrl = (uuid_comp) => {
            const url = process.env.REACT_APP_API_URL + '/create';
            sendPostRequest(url, {uuid: uuid_comp})
                .then((response) => {
                    if (response.url && response.url !== undefined && response.url !== null && response.url !== "") {
                        const catch_url = document.getElementById('catch_url');
                        catch_url.value = process.env.REACT_APP_API_URL + "/catch/" + response.url;
                        let uuid = false;
                        uuid = response.url;
                        showLog(uuid);
                    }
                })
        }
        
        var existingCookie = getCookie('uuid_comp');
        if (!existingCookie) {
            const newUUID = uuidv4();
            createCookie('uuid_comp', newUUID, {expires: 365});
        }
        existingCookie = getCookie('uuid_comp');
        GenerateCatchUrl(existingCookie)
    }, []);

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function createCookie(name, value, options = {}) {
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        let updatedCookie = `${name}=${value}`;
        for (const optionKey in options) {
            updatedCookie += `; ${optionKey}`;
            const optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += `=${optionValue}`;
            }
        }
        document.cookie = updatedCookie;
    }

    const [lastData, setLastData] = useState([
        {method: "No requests", time: ""},
    ]);
    const [jsonModal, setJsonModal] = useState([]);
    const [isModalOpen, setOpenModal] = useState(false);

    async function sendPostRequest(url, data = null) {
        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (error) {
            console.error("Error wit POST request:", error);
        }
    }

    const showLog = (id) => {
        let url = process.env.REACT_APP_API_URL + '/log/' + id;
        const eventSource = new EventSource(url);

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.length > 0) {
                setLastData(data);
            }
        };

        return () => {
            eventSource.close();
        };
    }

    const openModal = (index) => {
        if (index !== false) {
            if (lastData[index]) {
                var format_json = JSON.stringify(JSON.parse(JSON.stringify(lastData[index])), null, 4);
                setJsonModal(format_json);
                setOpenModal(true);
            }
        } else {
            setOpenModal(false);
        }
    }

    const copyUrl = () => {

        const textarea = document.getElementById('catch_url');
        textarea.disabled = false;
        textarea.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        textarea.disabled = true;
        FireAlert("success", "Text was copied")
    }

    return (
        <div>
            <strong className="text-xl">Request Catcher</strong>
            <div className="grid grid-cols-6 gap-4">
                <div className="xl:col-start-1 xl:col-end-6 lg:col-start-1 lg:col-end-6 col-start-1 col-end-7 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold py-4">Catch URL</label>
                        <input type="text"
                               id="catch_url"
                               disabled={true}
                               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"/>
                    </div>
                </div>
                <div className="xl:col-start-6 xl:col-end-7 lg:col-start-6 lg:col-end-7 col-start-1 col-end-7 p-4">
                    <div className="mb-4">
                        <button type="button" className="rounded-2xl bg-orange-400 hover:bg-orange-500 ml-2 p-2 mt-14"
                                onClick={copyUrl}>Copy url
                        </button>
                    </div>
                </div>

                <div className="xl:col-start-1 xl:col-end-7 lg:col-start-1 lg:col-end-7 col-start-1 col-end-7 p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold py-4">Requests</label>
                        <table className="table-auto w-full">
                            <thead>
                            <tr>
                                <th className="px-4 py-2">Type</th>
                                <th className="px-4 py-2">Date and time</th>
                                <th className="px-4 py-2">Details</th>
                            </tr>
                            </thead>
                            <tbody id="request_table">
                            {lastData.map((item, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{item.method}</td>
                                    <td className="border px-4 py-2">{item.time}</td>
                                    <td className="border px-4 py-2">
                                        <span className={item.time === "" ? "hidden" : "cursor-pointer text-blue-500 hover:underline"}
                                              onClick={() => openModal(index)}><i className="fa-solid fa-circle-info me-1"></i>Details</span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id="Modal1"
                 className={isModalOpen ? "fixed inset-0 flex items-center justify-center z-10" : "hidden fixed inset-0 flex items-center justify-center z-10"}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="bg-white rounded-lg p-8 z-20 w-5/6 h-5/6">
                    <div className="pre-scroll" style={{ maxHeight: '90%' }}>
                        <pre className="pre-wrap">{jsonModal}</pre>
                    </div>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={() => openModal(false)}>Zatvoriť
                    </button>
                </div>
            </div>


        </div>
    );
}

export default RequestCatcher;
