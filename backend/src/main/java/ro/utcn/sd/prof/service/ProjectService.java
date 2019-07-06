package ro.utcn.sd.prof.service;

import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import ro.utcn.sd.prof.dto.ProjectDTO;
import ro.utcn.sd.prof.entity.Project;
import ro.utcn.sd.prof.event.ProjectCreatedEvent;
import ro.utcn.sd.prof.repository.ProjectRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public List<ProjectDTO> listProjects() {
        List<ProjectDTO> projectDTOS = new ArrayList<>();
        for(Project iterator : projectRepository.findAll()){
            projectDTOS.add(ProjectDTO.ofEntity(iterator));
        }
        return projectDTOS;
    }

    @Transactional
    public ProjectDTO createProject(ProjectDTO projectDTO) {
        Project project = new Project();

        project.setTitle(projectDTO.getTitle());
        project.setDescription(projectDTO.getDescription());
        project.setCategory(projectDTO.getCategory());
        project.setNeededSum(Double.parseDouble(projectDTO.getNeededSum()));
        project.setInvestedSum(0.0);
        projectRepository.save(project);

        ProjectDTO output = ProjectDTO.ofEntity(project);
        eventPublisher.publishEvent(new ProjectCreatedEvent(output));
        return output;
    }


    @Transactional
    public ProjectDTO updateProjectSum(ProjectDTO projectDTO) {
        System.out.println(projectDTO);
        Project project = projectRepository.findByTitle(projectDTO.getTitle());
        System.out.println("Proiect vechi:" + project);
        // make new proj
        Project newProject = new Project();
        newProject.setTitle(project.getTitle());
        newProject.setDescription(project.getDescription());
        newProject.setCategory(project.getCategory());
        newProject.setNeededSum(project.getNeededSum());
        newProject.setInvestedSum(project.getInvestedSum() + 50.0);
        System.out.println("Proiect nou:" + newProject);

        //delete old one
        projectRepository.delete(projectRepository.findByTitle(projectDTO.getTitle()));
        //save new proj
        Project finalProject = projectRepository.save(newProject);


        ProjectDTO output = ProjectDTO.ofEntity(finalProject);
        System.out.println(finalProject);
        System.out.println(output);
        eventPublisher.publishEvent(new ProjectCreatedEvent(output));
        return output;
    }
}
