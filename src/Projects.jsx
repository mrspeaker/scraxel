import Project from "./Project.jsx";

const Projects = ({ projects }) => {
    return (
        <div>
            <strong># projects: {projects.length}</strong>
            <ul>
                {projects.map((p) => (
                    <Project key={p.name} project={p} />
                ))}
            </ul>
        </div>
    );
};

export default Projects;
