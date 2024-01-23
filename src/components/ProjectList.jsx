import { projectData } from "../utils/projectData";
import Project from "./Project";

console.log(projectData)

function Projects({ }) {

    const list = projectData.map(project => {
        return (
            <Project
                key={project.id}
                data={project}
            />
        )
    })

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default Projects;