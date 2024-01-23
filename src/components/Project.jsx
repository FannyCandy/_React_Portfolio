// import { projectData } from "../utils/projectData";
// import { useState } from "react";

function Project({ data }) {

    const { id, name, imgPath, gitHub, app } = data
    console.log('project data', data)

    return (
        <div key={id}>
            <img url={imgPath} alt="image"/>
            <a href={app} target="_blank" rel="noreferrer">{name}</a>
            <a href={gitHub}><img url="../assets/github-marking.svg" alt="image" style={{width:40, height:40,}}/></a>
        </div>
    )
}

export default Project;