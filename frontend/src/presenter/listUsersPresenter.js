import userModel from "../model/userModel";

class ListUsersPresenter {
    onInit() {
        userModel.loadUsers();
    }

    onViewAllUsers(){
        userModel.loadUsers();
        return userModel.state.users;
    }

    onBanUser(username){
        userModel.banUser(username);
    }
}

const listUsersPresenter = new ListUsersPresenter();

export default listUsersPresenter;