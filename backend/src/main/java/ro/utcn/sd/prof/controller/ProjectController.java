package ro.utcn.sd.prof.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ro.utcn.sd.prof.command.Cmd;
import ro.utcn.sd.prof.dto.ProjectDTO;
import ro.utcn.sd.prof.event.BaseEvent;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ProjectController {

    private final Cmd cmd;
    private final SimpMessagingTemplate messagingTemplate;

    @GetMapping("/projects")
    public List<ProjectDTO> viewAllProjects(){
        return cmd.execute( "viewProjects", null);
    }

    @PostMapping("/projects")
    public ProjectDTO createProject(@RequestBody ProjectDTO dto){
        return (ProjectDTO)cmd.execute("createProject", dto).get(0);
    }

    // cred ca era mai ok cu get si pun conditia ca id/titlu sa fie egale cu cele date
    @PostMapping("/updateProjectSum")
    public ProjectDTO updateProject(@RequestBody ProjectDTO dto){
        return (ProjectDTO)cmd.execute("updateProjectSum", dto).get(0);
    }


    @EventListener(BaseEvent.class)
    public void handleEvent(BaseEvent event) {
        log.info("Got an event: {}.", event);
        messagingTemplate.convertAndSend("/topic/events", event);
    }

}
