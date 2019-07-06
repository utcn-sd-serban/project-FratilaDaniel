import React, { Component } from "react";
import projectModel from "../model/projectModel"
import ListProjects from "./ListProjects";

const mapModelStateToComponentState = modelState => ({
    projects: modelState.filteredProjects
});

export default class FilterProjectsSmart extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(projectModel.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        projectModel.addListener("change", this.listener);
    }

    componentWillUnmount() {
        projectModel.removeListener("change", this.listener);
    }

    render() {
        return (
            <ListProjects
            projects = {this.state.projects}/>
        );
    }
}