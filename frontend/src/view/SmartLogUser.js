import React, { Component } from "react";
import userModel from "../model/userModel";

import LogUser from "./LogUser";
import RegisterUser from "./RegisterUser"
import logUserPresenter from "../presenter/logUserPresenter";
import registerUserPresenter from "../presenter/registerUserPresenter"
import ListUsers from "./ListUsers";


const mapModelStateToComponentState = modelState => ({
    //users: modelState.users
    username: modelState.loggedUser.username,
    password: modelState.loggedUser.password,
    userAttribute : modelState.loggedUser.userAttribute,

    newUsername: modelState.newUser.newUsername,
    newPassword: modelState.newUser.newPassword,
    newUserAttribute : modelState.newUser.newUserAttribute

});

export default class SmartLogUser extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(userModel.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        userModel.addListener("change", this.listener);
    }

    componentWillUnmount() {
        userModel.removeListener("change", this.listener);
    }

    render() {
        return (
        <div>
            <LogUser 
                //onViewDetails={studentsListPresenter.onViewDetails}
                username={this.state.username}
                password={this.state.password} 
                onChange={logUserPresenter.onChange}
                onLogIn={logUserPresenter.onLogIn}
                //questions={this.state.questions} 
                />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <RegisterUser
                newUsername = {this.state.newUsername}
                newPassword = {this.state.newPassword}
                newUserAttribute = {this.state.newUserAttribute}
                onChange = {registerUserPresenter.onChange} 
                onSignUp = {registerUserPresenter.onSignUp}            
            />
        </div>
        );
    }
}
