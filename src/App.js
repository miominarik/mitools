import './App.css';
import Navbar from "./layout/navbar";
import Router from "./Router";

function App({actual_version}) {
    return (
        <div className="App">
            <Navbar actual_version={actual_version} router={<Router/>}/>
        </div>
    );
}

export default App;
