const BASE_URL = "http://localhost:8080";

export default class RestProject
{
    setAuth(authorization){
        this.authorization = authorization;
    }

    loadAllProjects(){
        return fetch(BASE_URL + "/projects", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => {
            return response.json()});
    }


    createProject(title, description, category)
    {
        return fetch(BASE_URL + "/projects", {

            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
                category: category,
                neededSum: "",
                investedSum: "0"
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type" : "application/json"
            }
        }).then(response =>{
            return response.json()
        });
    }

        // cred ca mergea facut un RestOffer
        createProposal(investorUsername, innovatorUsername, description)
        {
            return fetch(BASE_URL + "/proposals", {
    
                method: "POST",
                body: JSON.stringify({
                    investorUsername: investorUsername,
                    innovatorUsername: innovatorUsername,
                    description: description
                }),
                headers: {
                    "Authorization": this.authorization,
                    "Content-Type" : "application/json"
                }
            }).then(response =>{
                return response.json()
            });
        }
    
    updateProjectSum(projectTilte){
        return fetch(BASE_URL + "/updateProjectSum", {
    
            method: "POST",
            body: JSON.stringify({
                title: projectTilte,
                description: "",
                category: "",
                neededSum: "",
                investedSum: ""
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