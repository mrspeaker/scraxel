const File = ({ file }) => {
    return <li>{file.name}</li>;
};

const Project = ({ project, onAdd }) => {
    return (
        <fieldset>
            <legend>{project.name}</legend>
            <button onClick={() => onAdd(window.prompt("name"))}>
                add file
            </button>
            <ul>
                {project.files.map((f) => (
                    <File file={f} />
                ))}
            </ul>
        </fieldset>
    );
};

export default Project;
