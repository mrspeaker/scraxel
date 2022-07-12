const ProjectList = ({ projects, onLoad }) => {
    return (
        <fieldset>
            <legend>projects</legend>
            <ul>
                {projects.map((p) => (
                    <li key={p.name} onClick={() => onLoad(p.name)}>
                        {p.name}
                    </li>
                ))}
            </ul>
        </fieldset>
    );
};

export default ProjectList;
