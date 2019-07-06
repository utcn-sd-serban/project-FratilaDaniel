package ro.utcn.sd.prof.dto;


import lombok.Data;
import ro.utcn.sd.prof.entity.Project;

@Data
public class ProjectDTO {

    private Integer id;
    private String owner;
    private String title;
    private String description;
    private String neededSum;
    private String investedSum;
    //private Double completedPercentage;
    //private String dateCreated;
    //private List<String> investors;
    private String category;


    public static ProjectDTO ofEntity(Project project){
        ProjectDTO projectDTO = new ProjectDTO();

//        projectDTO.setId(project.getId());
//        projectDTO.setOwner(owner);
        projectDTO.setTitle(project.getTitle());
        projectDTO.setDescription(project.getDescription());
        projectDTO.setNeededSum(project.getNeededSum().toString());
        projectDTO.setInvestedSum(project.getInvestedSum().toString());
//        projectDTO.setCompletedPercentage(project.getCompletedPercentage());
//        projectDTO.setDateCreated(project.getDateCreated().toString());
        projectDTO.setCategory(project.getCategory());

        return projectDTO;
    }


}
