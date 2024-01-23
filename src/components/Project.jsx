// import { projectData } from "../utils/projectData";
// import { useState } from "react";

function Project({ data }) {

    const { id, name, imgPath, gitHub, app } = data
    console.log('project data', data)

    return (
        <div key={id} className="project">
            <img src={imgPath} alt="image" style={{ width: 500, height: 300 }} />
            <br></br>
            <a href={app} target="_blank" rel="noreferrer">{name}_</a>
            <a href={gitHub}><img src="/github-mark.svg" alt="image" style={{ width: 27, height: 27 }} /></a>
        </div>
    )
}

export default Project;