import userModel from "../model/userModel";
import projectModel from "../model/projectModel";
class LogUserPresenter {

    onLogIn(){
        userModel.userLogIn(); // rest client constructed
        projectModel.resetAuthorization(userModel.client.authorization, userModel.state.loggedUser.username, userModel.state.loggedUser.password);
        window.location.assign("#/projects");
    }

    onChange(property, value) {
        userModel.changeLoggedUserProperty(property, value);
    }

    getUsername(){
        return userModel.state.loggedUser.username;
    }

    getUserAttribute(){
        //return userModel.getUserAttribute(); // din ceva motive nu merge asa
        return userModel.state.loggedUser.userAttribute;
    }

    onLogOut(){
        userModel.userLogOut();
        window.location.assign("#/");
    }
}

const logUserPresenter = new LogUserPresenter();

export default logUserPresenter;