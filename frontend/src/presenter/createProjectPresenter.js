import projectModel from "../model/projectModel";

class CreateProjectPresenter {

    onCreate() {
        projectModel.addProject(
            projectModel.state.newProject.title, 
            projectModel.state.newProject.description, 
            projectModel.state.newProject.category)
            .then(() => {
                projectModel.changeNewProjectProperty("title", "");
                projectModel.changeNewProjectProperty("description", "");
                projectModel.changeNewProjectProperty("category", "");
                window.location.assign("#/projects");
            });
    }

    onChange(property, value) {
        projectModel.changeNewProjectProperty(property, value);
    }

}

const createProjectPresenter = new CreateProjectPresenter();

export default createProjectPresenter;