package ro.utcn.sd.prof.event;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ro.utcn.sd.prof.dto.ProjectDTO;

@Data
@EqualsAndHashCode(callSuper = true)
public class ProjectCreatedEvent extends BaseEvent {
    private final ProjectDTO projectDTO ;

    public ProjectCreatedEvent(ProjectDTO projectDTO) {
        super(EventType.PROJECT_CREATED);
        this.projectDTO = projectDTO;
    }
}
