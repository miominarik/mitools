function SettingsModal({isOpen, setIsOpen, ChangeTheme, actual_theme}) {

    return (
        <div>
            <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${isOpen ? '' : 'hidden'}`}>
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl text-gray-700 dark:text-white font-semibold">App settings</h3>
                        <button onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-700">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="text-gray-700">
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-white font-semibold">Theme</label>
                            <select value={actual_theme}
                                className="w-full h-10 bg-white dark:bg-slate-800 text-gray-700 dark:text-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                onChange={ChangeTheme}>
                                <option value="auto">Sync with system</option>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal