import {Link, NavLink} from "react-router-dom";
import logo from '../logo.png';

function Navbar({router}) {
    return (
        <div className="sticky top-0 flex">
            <div className="bg-white w-64 h-screen shadow-lg sticky top-0">
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-center">Main Menu</h2>
                    <ul className="mt-4">
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/"
                                     className={({isActive}) => "block px-4 py-2 text-gray-800 hover:bg-gray-100 " + (isActive ? 'active' : '')}>
                                Home Page
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/json_formatter"
                                     className={({isActive}) => "block px-4 py-2 text-gray-800 hover:bg-gray-100 " + (isActive ? 'active' : '')}>
                                JSON Formatter
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/json_minifier"
                                     className={({isActive}) => "block px-4 py-2 text-gray-800 hover:bg-gray-100 " + (isActive ? 'active' : '')}>
                                JSON Minifier
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/base64_encodedecode"
                                     className={({isActive}) => "block px-4 py-2 text-gray-800 hover:bg-gray-100 " + (isActive ? 'active' : '')}>
                                Base64 Encode/Decode
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/request_tester"
                                     className={({isActive}) => "block px-4 py-2 text-gray-800 hover:bg-gray-100 " + (isActive ? 'active' : '')}>
                                Request Tester
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/sql_tester"
                                     className={({isActive}) => "block px-4 py-2 text-gray-800 hover:bg-gray-100 " + (isActive ? 'active' : '')}>
                                SQL Tester
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <li>
                            <NavLink to="/random_text_generator"
                                     className={({isActive}) => "block px-4 py-2 text-gray-800 hover:bg-gray-100 " + (isActive ? 'active' : '')}>
                                Random Text Generator
                            </NavLink>
                        </li>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                    </ul>
                </div>
            </div>

            <div className="flex-grow">
                <nav className="bg-white shadow-lg sticky top-0">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <img src={logo} alt="fdsfsf" width="50"/>
                                <span className="text-gray-700 text-lg ms-3">MiTools</span>
                            </div>
                            <div></div>
                            <div><Link className="text-gray-500 text-sm" to="https://github.com" target="_blank"
                                       rel="noopener noreferrer">Github Contribute</Link></div>
                        </div>
                    </div>
                </nav>
                <div className="m-7 bg-white">
                    {router}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
