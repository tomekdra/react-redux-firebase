import React from "react";

const ProjectDetail = (props) => {

    const id = props.match.params.id;

    return (
        <div className={"container section"}>
            <div className={"card depth-0"}>
                <div className={"card-content"}>
                    <span className={"card-title"}>Tytul - {id}</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by me</div>
                    <div>Date : 123 321 </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;