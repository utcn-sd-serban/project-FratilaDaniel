import userModel from "../model/userModel";
import logUserPresenter from "./logUserPresenter";

class RegisterUserPresenter {

    onSignUp(){
        userModel.signUp();
        
        // userModel.changeLoggedUserProperty("username", userModel.state.newUser.newUsername);
        // userModel.changeLoggedUserProperty("password", userModel.state.newUser.newPassword);
        // userModel.changeLoggedUserProperty("userAttribute", userModel.state.newUser.newUserAttribute);

        userModel.changeNewUserProperty("newUsername", "");
        userModel.changeNewUserProperty("newPassword", "");
        userModel.changeNewUserProperty("newUserAttribute", "");

//        logUserPresenter.onLogIn();
    }

    onChange(property, value) {
        userModel.changeNewUserProperty(property, value);
    }
}

const registerUserPresenter = new RegisterUserPresenter();

export default registerUserPresenter;