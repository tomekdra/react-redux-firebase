import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectLists from "../projects/ProjectLists";

class Dashboard extends Component {

    render() {
        return (
            <div className={"dashboard container"}>
                <div className={"row"}>
                    <div className={"col s12 m6"}>
                        <ProjectLists />
                    </div>
                    <div className={"col s12 m5 offset-1m"}>
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;