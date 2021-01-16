import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCUMKP7f1rcG94J_Bb2TpFXA4lyL-aAMk4",
    authDomain: "htn2020-c3c0b.firebaseapp.com",
    projectId: "htn2020-c3c0b",
    storageBucket: "htn2020-c3c0b.appspot.com",
    messagingSenderId: "352855450184",
    appId: "1:352855450184:web:bfe901aebf130800de2e7d",
};

firebase.initializeApp(config);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
