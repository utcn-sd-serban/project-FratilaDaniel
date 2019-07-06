import { EventEmitter } from "events";
import RestClient from  "../rest/RestClient";

class UserModel extends EventEmitter {
    constructor() {
        super();
        this.client = new RestClient();
        this.state = {
            users: [],
            loggedUser: {
                username: "",
                password: "",
                userAttribute: ""
            },
            newUser:{
                newUsername: "",
                newPassword: "",
                newUserAttribute: ""
            }
        };
    }

    changeLoggedUserProperty(property, value) {
        this.state = {
            ...this.state,
            loggedUser: {
                ...this.state.loggedUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    loadUsers() {
        return this.client.loadAllUsers().then(users => {
            this.state = { 
                ...this.state, 
                users: users 
            };
            this.emit("change", this.state);
        })
    }


    userLogIn(){
         this.client = new RestClient(this.state.loggedUser.username, this.state.loggedUser.password);
         return this.client.loadAllUsers()
         .then(users => { 
            for(var iterator = 0; iterator < users.length; ++iterator){// caut userul si ii iau atributul
                if(this.state.loggedUser.username === users[iterator].username)
                    this.state.loggedUser.userAttribute = users[iterator].userAttribute;
            } 
            })
         .then(this.client.userLogin(this.state.loggedUser.username, this.state.loggedUser.password))
         .then(this.emit("change", this.state));
    }

    userLogOut(){
        this.client = new RestClient();
        this.state.loggedUser.username = "";
        this.state.loggedUser.password = "";
        this.state.loggedUser.userAttribute = "";
    }

    changeNewUserProperty(property, value){
        this.state = {
            ...this.state,
            newUser: {
                ...this.state.newUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }


    signUp(){
        this.client.createUser(this.state.newUser.newUsername, this.state.newUser.newPassword, this.state.newUser.newUserAttribute);
        this.emit("change", this.state);
    }

    getUsername(){
        return this.state.loggedUser.username;
    }

    getUserAttribute(){
        return this.state.loggedUser.userAttribute;
    }

    banUser(username){
        this.client.deleteUser(username);
        this.emit("change", this.state);
    }

    isInnovator(username){
        for(var iterator = 0; iterator < this.state.users.length; ++iterator){
            if(this.state.users[iterator].loggedUser.username === username 
                && this.state.users[iterator].loggedUser.userAttribute === "innovator"){
                // make proposals only towards innovators
                return true;
            }
        }
        return false;
    }
    
}

const userModel = new UserModel();

export default userModel;