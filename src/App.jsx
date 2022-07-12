import "./App.css";
import { useState } from "react";
import Projects from "./Projects.jsx";
import { default_data } from "./data/index.js";

function App() {
    const [data, setData] = useState(default_data());

    const add_project = (name) => {
        setData((d) => ({
            ...d,
            projects: [...d.projects, { name }],
        }));
    };

    return (
        <div className="App">
            <h1>Scraxel</h1>
            <button onClick={() => add_project(window.prompt("name"))}>
                add
            </button>
            <Projects projects={data.projects} />
        </div>
    );
}

export default App;
