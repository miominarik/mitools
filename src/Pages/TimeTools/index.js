import {useState} from "react";
import moment from 'moment-timezone';

function TimeTools() {

    const [MyTimeZoneDate, setMyTimeZoneDate] = useState("");
    const [GMTTimeZoneDate, setGMTTimeZoneDate] = useState("");
    
    const [MyTimeZoneDateUnix, setMyTimeZoneDateUnix] = useState("");
    const [GMTTimeZoneDateUnix, setGMTTimeZoneDateUnix] = useState("");

    const ConvertUnixToDatetime = (event) => {
        let response = '';
        let response_my_timezone = '';
        let response_gmt_timezone = '';
        if (event.target.value !== undefined) {
            response = moment.unix(event.target.value)
            if (response.isValid()){
                // Time in my timezone
                response_my_timezone = response.format('YYYY-MM-DD HH:mm:ss [GMT]Z');
                // time in GMT
                response_gmt_timezone = response.tz('GMT').format('YYYY-MM-DD HH:mm:ss [GMT]Z');
            }else{
                response_my_timezone = "Invalid Date"
                response_gmt_timezone = "Invalid Date"
            }
        }
        setMyTimeZoneDate(response_my_timezone);
        setGMTTimeZoneDate(response_gmt_timezone);
    }

    const ConvertDatetimeToUnix = (event) => {
        let response_my_timezone = '';
        let response_gmt_timezone = '';
            if (event.target.value !== undefined) {
                response_my_timezone = moment(event.target.value, 'YYYY-MM-DD HH:mm:ss').unix();
                response_gmt_timezone = moment(event.target.value, 'YYYY-MM-DD HH:mm:ss').tz('GMT').unix();
                if (isNaN(response_my_timezone) || response_gmt_timezone < 0 ) {
                    response_my_timezone = "Invalid Date";
                    response_gmt_timezone = "Invalid Date";
                }
            } else {
                response_my_timezone = "Invalid Date";
                response_gmt_timezone = "Invalid Date";
            }
        
        setMyTimeZoneDateUnix(response_my_timezone);
        setGMTTimeZoneDateUnix(response_gmt_timezone);
    }

    return (
        <div>
            <strong className="text-xl">Unix Timestamp to date</strong>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Unix timestamp</label>
                            <input
                                type="number"
                                className="w-full h-10 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                onChange={ConvertUnixToDatetime}
                            ></input>
                        </div>
                    </form>
                </div>
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Result Datetime (Your time zone)</label>
                            <input
                                type="text"
                                className="w-full h-10 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                disabled={true}
                                value={MyTimeZoneDate || ''}
                            ></input>
                        </div><div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Result Datetime (GMT)</label>
                            <input
                                type="text"
                                className="w-full h-10 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                disabled={true}
                                value={GMTTimeZoneDate || ''}
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
            <hr/>
            <strong className="text-xl">Date to Unix timestamp</strong>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Date (YYYY-MM-DD HH:mm:ss)</label>
                            <input
                                type="text"
                                className="w-full h-10 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                onChange={ConvertDatetimeToUnix}
                            ></input>
                        </div>
                    </form>
                </div>
                <div className="col-span-1 p-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Result Datetime (Your time zone)</label>
                            <input
                                type="text"
                                className="w-full h-10 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                disabled={true}
                                value={MyTimeZoneDateUnix || ''}
                            ></input>
                        </div><div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Result Datetime (GMT)</label>
                            <input
                                type="text"
                                className="w-full h-10 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                disabled={true}
                                value={GMTTimeZoneDateUnix || ''}
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TimeTools;
