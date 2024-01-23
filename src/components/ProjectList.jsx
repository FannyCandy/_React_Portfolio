import { projectData } from "../utils/projectData";
import Project from "./Project";

console.log(projectData)

function Projects( { } ) {

    const list = projectData.map(project => {
        return (
            <Project
                key={project.id}
                data={project}
            />
        )
    })

    return (
        <ul> {list} </ul>
    )
}

export default Projects;