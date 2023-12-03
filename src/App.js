import './App.css';
import Navbar from "./layout/navbar";
import Router from "./Router";

function App({actual_version}) {
    return (
        <div className="App bg-white dark:bg-slate-800">
            <Navbar actual_version={actual_version} router={<Router/>}/>
        </div>
    );
}

export default App;
