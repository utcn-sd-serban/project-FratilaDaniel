import projectModel from "../model/projectModel";
import userModel from "../model/userModel";
class CreateProposalPresenter {

    onCreate() {
        //if(userModel.isInnovator(projectModel.state.newProposal.innovatorUsername))
            projectModel.createProposal(userModel.state.loggedUser.username);
    }

    onChange(property, value) {
        projectModel.changeNewProposalProperty(property, value);
    }

    onAnswerProposal(value){
        projectModel.answerProposal(value);
    }

}

const createProposalPresenter = new CreateProposalPresenter();

export default createProposalPresenter;