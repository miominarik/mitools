import {Link, NavLink} from "react-router-dom";
import logo from '../logo.png';
import SettingsModal from "../Components/SettingsModal";
import {useState} from "react";

function Navbar({actual_version, router, actual_theme, setNewTheme}) {

    const [isOpen, setIsOpen] = useState(false);

    const ChangeTheme = (event) => {
        const allowed_theme = ['auto', 'light', 'dark']
        if (allowed_theme.includes(event.target.value)) {
            if (event.target.value === 'light' || event.target.value === 'dark') {
                localStorage.theme = event.target.value
                SetThemeManual()
                setNewTheme(event.target.value)
            } else {
                localStorage.removeItem('theme')
                SetThemeManual()
                setNewTheme("auto")
            }
        }
    }

    const SetThemeManual = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    return (
        <div className="flex">
            <div className="hidden md:block w-70 bg-white dark:bg-slate-800 h-screen shadow-lg sidebar sticky top-0">
                <div className="p-4" style={{overflowY: 'auto'}}>
                    <h2 className="text-lg font-semibold text-center text-black dark:text-white">Tools Menu</h2>
                    <ul className="mt-4">
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/"
                                     className="px-4 py-2 text-gray-800 dark:text-white dark:hover:bg-slate-700 flex items-center transition duration-300 ease-in-out hover:bg-gray-200 rounded-md">
                                <i className="fa-solid fa-house me-2"></i>
                                Home
                            </NavLink>

                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/json_formatter"
                                     className="px-4 py-2 text-gray-800 dark:text-white dark:hover:bg-slate-700 flex items-center transition duration-300 ease-in-out hover:bg-gray-200 rounded-md">
                                <i className="fa-solid fa-square-check  me-2"></i>
                                JSON Formatter
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/json_minifier"
                                     className="px-4 py-2 text-gray-800 dark:text-white dark:hover:bg-slate-700 flex items-center transition duration-300 ease-in-out hover:bg-gray-200 rounded-md">
                                <i className="fa-solid fa-minimize  me-2"></i>
                                JSON Minifier
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/time_tools"
                                     className="px-4 py-2 text-gray-800 dark:text-white dark:hover:bg-slate-700 flex items-center transition duration-300 ease-in-out hover:bg-gray-200 rounded-md">
                                <i className="fa-solid fa-clock me-1"></i>
                                Timestamp Tools
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/base64_encodedecode"
                                     className="px-4 py-2 text-gray-800 dark:text-white dark:hover:bg-slate-700 flex items-center transition duration-300 ease-in-out hover:bg-gray-200 rounded-md">
                                <i className="fa-solid fa-shield me-1"></i>
                                Base64 Encode/Decode
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/request_tester"
                                     className="px-4 py-2 text-gray-800 dark:text-white dark:hover:bg-slate-700 flex items-center transition duration-300 ease-in-out hover:bg-gray-200 rounded-md">
                                <i className="fa-solid fa-code-pull-request me-1"></i>
                                Request Tester
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/request_catcher"
                                     className="px-4 py-2 text-gray-800 dark:text-white dark:hover:bg-slate-700 flex items-center transition duration-300 ease-in-out hover:bg-gray-200 rounded-md">
                                <i className="fa-solid fa-magnet me-1"></i>
                                Request Catcher
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/sql_tester"
                                     className="px-4 py-2 text-gray-800 dark:text-white dark:hover:bg-slate-700 flex items-center transition duration-300 ease-in-out hover:bg-gray-200 rounded-md">
                                <i className="fa-solid fa-database me-1"></i>
                                SQL Tester
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/random_text_generator"
                                     className="px-4 py-2 text-gray-800 dark:text-white dark:hover:bg-slate-700 flex items-center transition duration-300 ease-in-out hover:bg-gray-200 rounded-md">
                                <i className="fa-solid fa-file-word me-1"></i>
                                Random Text Generator
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/css_tools"
                                     className="px-4 py-2 text-gray-800 dark:text-white dark:hover:bg-slate-700 flex items-center transition duration-300 ease-in-out hover:bg-gray-200 rounded-md">
                                <i className="fa-brands fa-css3 me-1"></i>
                                CSS Minifier/Formatter
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                    </ul>

                    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                        <div className="col-span-1 p-4">
                            <small className="version text-gray-500 dark:text-white">Version: {actual_version}</small>
                        </div>
                        <div className="col-span-1 p-4">
                            <small className="version text-gray-500 dark:text-white cursor-pointer"
                                   onClick={() => setIsOpen(true)}>App settings</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-grow">
                <nav className="bg-white dark:bg-slate-800 shadow-lg sticky top-0">
                    <div className="container px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="md:hidden">
                                    <button
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white hover:dark:bg-slate-700"
                                        onClick={() => {
                                            const sidebar = document.querySelector(".sidebar");
                                            sidebar.classList.toggle("hidden");
                                        }}>
                                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 24 24">
                                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                                        </svg>
                                    </button>
                                </div>
                                <img src={logo} alt="fdsfsf" width="50"/>
                                <span className="text-gray-700 dark:text-white text-lg ms-3">MiTools</span>
                            </div>
                            <div></div>
                            <div>
                                <Link className="text-gray-500 dark:text-white text-sm"
                                      to="https://github.com/miominarik/mitools"
                                      target="_blank"
                                      rel="noopener noreferrer"><i
                                    className="fa-brands fa-github"></i> GitHub</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="m-7 bg-white dark:bg-slate-800">
                    {router}
                    <SettingsModal isOpen={isOpen} setIsOpen={setIsOpen} ChangeTheme={ChangeTheme}
                                   actual_theme={actual_theme}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
