export const create_project = (name) => ({ name, files: [] });
export const create_file = (name) => ({ name });

const default_project = (() => {
    return {
        ...create_project("default"),
        files: [create_file("file1")],
    };
})();

export const default_data = () => ({
    current: default_project,
    projects: [default_project],
});
