import './App.css';
import Navbar from "./layout/navbar";
import Router from "./Router";
import {useEffect, useState} from "react";

function App({actual_version}) {
    const [actual_theme, setNewTheme] = useState("auto")
    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        if (localStorage.theme === 'dark'){
            setNewTheme("dark")
        }
        if (localStorage.theme === 'light'){
            setNewTheme("light")
        }
        if (localStorage.theme === null){
            setNewTheme("auto")
        }
    }, []);
    return (
        <div className="App bg-white dark:bg-slate-800">
            <Navbar actual_version={actual_version} router={<Router/>} actual_theme={actual_theme} setNewTheme={setNewTheme} />
        </div>
    );
}

export default App;
