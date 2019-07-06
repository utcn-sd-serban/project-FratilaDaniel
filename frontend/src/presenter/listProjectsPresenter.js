import projectModel from "../model/projectModel";

class ListProjectsPresenter {

    // view all:
    onInit() {
        projectModel.clearFilters();
        projectModel.loadProjects();
    }


    //filter:
    onFilterByCategory(){
        projectModel.filterByCategory();
        window.location.assign("#/filtered-projects");
    }

    onChangeFilter(value){
        projectModel.clearFilters();
        projectModel.changeFilterProperty(value);
    }

    onInvest(title){
        projectModel.invest(title);
    }
}

const listProjectsPresenter = new ListProjectsPresenter();

export default listProjectsPresenter;