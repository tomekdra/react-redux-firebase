import React from "react";

const ProjectSummary = ({project}) => {

    return (
        <div className={"card depth-0"}>
            <div className={"card-content grey-text text-darken-3"}>
                <span className={"card-title"}>{project.title}</span>
                <p>Posted by Tom</p>
                <div className={"grey-text"}>25-05-2020, 16:18</div>
            </div>
        </div>
    )
}

export default ProjectSummary;