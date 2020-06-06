import React from "react";
import moment from "moment";
import 'moment/locale/pl'

const ProjectSummary = ({project}) => {

    return (
        <div className={"card depth-0"}>
            <div className={"card-content grey-text text-darken-3"}>
                <span className={"card-title"}>{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <div className={"grey-text"}>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
        </div>
    )
}

export default ProjectSummary;