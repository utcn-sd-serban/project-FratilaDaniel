import React, { Component } from "react";
import projectModel from "../model/projectModel";
import ListProjects from "./ListProjects";
import ListUsers from "./ListUsers";
import listUsersPresenter from "../presenter/listUsersPresenter";
import listProjectsPresenter from "../presenter/listProjectsPresenter";
import logUserPresenter from "../presenter/logUserPresenter";
import PrintUser from "./PrintUser";
import CreateProject from "./CreateProject";
import createProjectPresenter from "../presenter/createProjectPresenter";
import CreateProposal from "./CreateProposal";
import createProposalPresenter from "../presenter/createProposalPresenter";
import ListProposals from "./ListProposals";

const mapModelStateToComponentState = modelState => ({
    projects: modelState.projects,
    proposals: modelState.proposals,

    users: listUsersPresenter.onViewAllUsers(),
    username: logUserPresenter.getUsername(),
    userAttribute: logUserPresenter.getUserAttribute(),
    
    filterTag: modelState.filterTag,
    
    newProjectTitle: modelState.newProject.title,
    newProjectDescription: modelState.newProject.description,
    newProjectCategory: modelState.newProject.category,

    innovatorUsername: modelState.newProposal.innovatorUsername, 
    description: modelState.newProposal.description
});


export default class ListProjectsSmart extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(projectModel.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        projectModel.addListener("change", this.listener);
        listProjectsPresenter.onInit();
    }

    componentWillUnmount() {
        projectModel.removeListener("change", this.listener);
    }

    render() {
        if(this.state.userAttribute === "innovator"){ // enable create project
            return (
                <div>
                    <PrintUser
                        username = {this.state.username}
                        userAttribute = {this.state.userAttribute}
                        onLogOut = {logUserPresenter.onLogOut}/>
                
                    <ListProjects 
                        projects = {this.state.projects}
                        filterTag = {this.state.filterTag}
                        onFilterByCategory = {listProjectsPresenter.onFilterByCategory}
                        onChangeFilter = {listProjectsPresenter.onChangeFilter}/>

                    <CreateProject
                        title = {this.state.newProjectTitle}
                        description = {this.state.newProjectDescription}
                        category = {this.state.newProjectCategory}
                        onChange = {createProjectPresenter.onChange}
                        onCreate = {createProjectPresenter.onCreate}
                    />

                    <ListProposals
                        proposals = {this.state.proposals}
                        onAnswerProposal = {createProposalPresenter.onAnswerProposal}/>
                </div>
               );    
        }
        else if(this.state.userAttribute === "investor"){ // enable create proposal
            return (
                <div>
                    <PrintUser
                        username = {this.state.username}
                        userAttribute = {this.state.userAttribute}
                        onLogOut = {logUserPresenter.onLogOut}/>
                    <ListProjects 
                        projects = {this.state.projects}
                        filterTag = {this.state.filterTag}
                        onFilterByCategory = {listProjectsPresenter.onFilterByCategory}
                        onChangeFilter = {listProjectsPresenter.onChangeFilter}
                        onInvest = {listProjectsPresenter.onInvest}
                        />
                    <CreateProposal
                        onCreate = {createProposalPresenter.onCreate}
                        onChange = {createProposalPresenter.onChange}
                        innovatorUsername = {this.state.innovatorUsername}
                        description = {this.state.description}
                        investorUsername = {this.state.username}
                        />
                </div>
               );
        }    
        else{ // is admin, enable view all users, ban user
            return (
                <div>
                    <PrintUser
                        username = {this.state.username}
                        userAttribute = {this.state.userAttribute}
                        onLogOut = {logUserPresenter.onLogOut}/>
                    <ListProjects 
                        projects = {this.state.projects}
                        filterTag = {this.state.filterTag}
                        onFilterByCategory = {listProjectsPresenter.onFilterByCategory}
                        onChangeFilter = {listProjectsPresenter.onChangeFilter}
                        />
                        
                <ListUsers
                    users = {this.state.users}
                    onBanUser = {listUsersPresenter.onBanUser}/>
                </div>
            );
       }        
    }
}
