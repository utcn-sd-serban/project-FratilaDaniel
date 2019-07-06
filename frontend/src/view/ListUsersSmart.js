import React, { Component } from "react";
import userModel from "../model/userModel";
import listUsersPresenter from "../presenter/listUsersPresenter";
import ListUsers from "./ListUsers"

const mapModelStateToComponentState = modelState => ({
    users: modelState.users,
});

export default class ListUsersSmart extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(userModel.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        userModel.addListener("change", this.listener);
        listUsersPresenter.onInit();
    }

    componentWillUnmount() {
        userModel.removeListener("change", this.listener);
    }

    render() {
        return (
            <div>
                <ListUsers
                    users = {this.state.users}/>
            </div>
           );
    }
}
