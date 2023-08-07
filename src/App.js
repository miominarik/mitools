import './App.css';
import Navbar from "./layout/navbar";
import Router from "./Router";

function App() {
    return (
        <div className="App">
            <Navbar router={<Router/>}/>
        </div>
    );
}

export default App;
