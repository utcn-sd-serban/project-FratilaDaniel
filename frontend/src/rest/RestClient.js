const BASE_URL = "http://localhost:8080";

export default class RestClient {



    constructor(username, password) {
        this.authorization = "Basic " + btoa(username + ":" + password);
    }

    userLogin(username, password)
    {
        const response = fetch(BASE_URL + "/login", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        });
        return response;
    }

    loadAllUsers()
    {
        return fetch(BASE_URL + "/users", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => {
            return response.json()});
    }

    createUser(username, password, userAttribute)
    {
        return fetch(BASE_URL + "/users", {

            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
                userAttribute: userAttribute
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type" : "application/json"
            }
        }).then(response =>{
            return response.json()
        });
    }

    deleteUser(username)
    {
        return fetch(BASE_URL + "/users", {

            method: "DELETE",
            body: JSON.stringify({
                username: username,
                password: "",
                userAttribute: ""
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type" : "application/json"
            }
        }).then(response =>{
            return response.json()
        });
    }



}