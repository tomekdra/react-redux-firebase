import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectLists from "../projects/ProjectLists";
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {

    render() {

        const {projects, auth} = this.props;

        if (!auth.uid) return <Redirect to={"/signin"}/>;

        return (
            <div className={"dashboard container"}>
                <div className={"row"}>
                    <div className={"col s12 m6"}>
                        <ProjectLists projects={projects}/>
                    </div>
                    <div className={"col s12 m5 offset-1m"}>
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects'}])
)(Dashboard);