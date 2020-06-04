import React from "react";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from "react-redux-firebase";

const ProjectDetail = (props) => {
   const { project } = props;
   if(project) {
       return (
           <div className={"container section"}>
               <div className={"card depth-0"}>
                   <div className={"card-content"}>
                       <span className={"card-title"}>{project.title}</span>
                       <p>{project.content}</p>
                   </div>
                   <div className="card-action grey lighten-4 grey-text">
                       <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                       <div>Date : 123 321</div>
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
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetail);