import { EventEmitter } from "events";
import WebSocketListener from "../ws/WebSocketListener";
import RestProject from "../rest/RestProject";

        
class ProjectModel extends EventEmitter {

    constructor(){
        super();
        this.restProject = new RestProject();
        this.state = {
            projects: [],
            newProject:{
                title:"",
                description:"",
                category:"",
                neededSum: "",
                investedSum: "" // 0
            },
            filterTag : "",
            filteredProjects: [],
            newProposal:{
                innovatorUsername: "",
                description:"",
                status: "pending"
            },
            proposals: [],
            myProposals: []
        };
    }

    // new client / web socket
    resetAuthorization(authorization, id, pass){
        this.restProject.setAuth(authorization);
        const listener = new WebSocketListener(id, pass);
        
        listener.on("event", event => {
            if (event.type === "PROJECT_CREATED") {
                projectModel.appendProject(event.projectDTO);
            }
        });
        this.emit("change", this.state);
    }


    // view all:
    loadProjects() {
        return this.restProject.loadAllProjects().then(projects => {
            this.state = { 
                ...this.state, 
                projects: projects 
            };
            this.emit("change", this.state);
        })
    }


    // filter:
    filterByCategory(){
        for(var iterator = 0; iterator < this.state.projects.length; ++iterator){
            if(this.state.projects[iterator].category === this.state.filterTag){
                this.addFilteredProject(this.state.projects[iterator]);
            }
        }
        this.emit("change", this.state);
    }

    addFilteredProject(foundProject){
        this.state = {
            ...this.state,
            filteredProjects: this.state.filteredProjects.concat([foundProject])
        };
        this.emit("change", this.state);
    }
    
    changeFilterProperty(value){
        this.state = {
            ...this.state,
            filterTag: value
        };
        this.emit("change", this.state);
    }
    
    clearFilters(){
        this.state = {
            ...this.state,
            filterTag: "",
            filteredProjects: []
        }
        this.emit("change", this.state);
    }


    // create new project:
    addProject(title, description, category){
        return this.restProject.createProject(title, description, category);
        //.then(project => this.appendProject(project));    
    }

    appendProject(project){
        this.state = { 
            ...this.state, 
            projects: this.state.projects.concat([project]) 
        };
        this.emit("change", this.state);
    }

    changeNewProjectProperty(property, value) {
        this.state = {
            ...this.state,
            newProject: {
                ...this.state.newProject,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }


        // create proposal from current user to an innovator
        createProposal(username){
            return this.restProject.createProposal(username, this.state.newProposal.innovatorUsername, this.state.newProposal.description)
                    .then(this.clearProposal());
            
        }

        
    
        clearProposal(){
            this.state = {
                ...this.state,
                newProposal:{
                    innovatorUsername: "",
                    description: ""
                }
            };
            this.emit("change", this.state);    
        }
    
        changeNewProposalProperty(property, value){
            this.state = {
                ...this.state,
                newProposal: {
                    ...this.state.newProposal,
                    [property]: value
                }
            };
            this.emit("change", this.state);
        }

        answerProposal(value){
            if(value === "accept"){
                this.restProject.addAcceptedProposal();//TO DO
            }
            else{
                this.restProject.addDeclinedProposal();//TO DO
            }
        }

        invest(title){
            for(var iterator = 0; iterator < this.state.projects.length; ++iterator){
                if(this.state.projects[iterator].title === title){
                    return this.restProject.updateProjectSum(title).then(this.loadProjects());
                }
            }
        }
}


const projectModel = new ProjectModel();


export default projectModel;