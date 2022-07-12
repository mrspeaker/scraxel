import "./App.css";
import Projects from "./Projects.jsx";

function App({ data }) {
    return (
        <div className="App">
            <h1>Scraxel</h1>
            <Projects projects={data.projects} />
        </div>
    );
}

export default App;
