package ro.utcn.sd.prof.command;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ro.utcn.sd.prof.dto.AppUserDTO;
import ro.utcn.sd.prof.dto.ProjectDTO;
import ro.utcn.sd.prof.dto.ProposalDTO;
import ro.utcn.sd.prof.entity.AppUser;
import ro.utcn.sd.prof.service.AppUserDetailsService;
import ro.utcn.sd.prof.service.AppUserService;
import ro.utcn.sd.prof.service.ProjectService;
import ro.utcn.sd.prof.service.ProposalService;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Component
public class Cmd {

    private final AppUserDetailsService appUserDetailsService;
    private final ProjectService projectService;
    private final AppUserService appUserService;
    private final ProposalService proposalService;

    public List execute(String command, Object args){
        if(command.equals("viewDetails")){
            List<AppUser> foundUser = new ArrayList<>();
            foundUser.add(appUserDetailsService.loadCurrentAppUser());
            return foundUser;
        }
        else if(command.equals("viewProjects")){
            return projectService.listProjects();
        }
        else if(command.equals("createProject")){
            List<ProjectDTO> projectDTO = new ArrayList<>();
            projectDTO.add(projectService.createProject((ProjectDTO)args));

            return projectDTO;
        }
        else if(command.equals("updateProjectSum")){
            List<ProjectDTO> projectDTO = new ArrayList<>();
            projectDTO.add(projectService.updateProjectSum((ProjectDTO)args));

            return projectDTO;
        }
        else if(command.equals("readUser")){
            List<AppUserDTO> foundUser = new ArrayList<>();
            foundUser.add(appUserService.validateUser((AppUserDTO) args));
            System.out.println(foundUser.get(0));
            return foundUser;
        }
        else if(command.equals("readAllUsers")){
            return appUserService.readAllUsers();
        }
        else if(command.equals("createUser")){
            List<AppUserDTO> newUser = new ArrayList<>();
            newUser.add(appUserService.createUser((AppUserDTO)args));
            for(AppUserDTO a : appUserService.readAllUsers())
                System.out.println(a);
            return newUser;
        }
        else if(command.equals("deleteUser")){
            appUserService.deleteUser((AppUserDTO)args);
            return new ArrayList<>();
        }
        else if(command.equals("createProposal")){
            List<ProposalDTO> newProposal = new ArrayList<>();
            newProposal.add(proposalService.createProposal((ProposalDTO)args));
            return newProposal;
        }
        else {
            return new ArrayList<>();
        }
    }
}
