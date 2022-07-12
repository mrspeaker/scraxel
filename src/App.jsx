import "./App.css";
import { useState } from "react";
import { create_project, create_file, default_data } from "./data/index.js";
import ProjectList from "./ProjectList.jsx";
import Project from "./Project.jsx";

function App() {
    const [data, setData] = useState(default_data());

    const add_project = () =>
        setData((d) => ({
            ...d,
            projects: [...d.projects, create_project(window.prompt("name"))],
        }));

    const load_project = (name) => {
        const current = data.projects.find((d) => d.name === name);
        setData((d) => ({
            ...d,
            current,
        }));
    };

    const add_file = (name) => {
        const f = create_file(name);
        // add the file yo.
        console.log(f);
    };

    return (
        <div className="App">
            <h1>Scraxel</h1>
            <button onClick={add_project}>add project</button>
            <ProjectList projects={data.projects} onLoad={load_project} />
            <Project project={data.current} onAdd={add_file} />
        </div>
    );
}

export default App;
