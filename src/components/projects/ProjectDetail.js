import React from "react";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";
import moment from "moment";

const ProjectDetail = (props) => {
    const {project, auth} = props;

    if (!auth.uid) return <Redirect to={"/signin"}/>;

    if (project) {
        return (
            <div className={"container section"}>
                <div className={"card depth-0"}>
                    <div className={"card-content"}>
                        <span className={"card-title"}>{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Loading project ...</h1>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetail);