package ro.utcn.sd.prof.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ro.utcn.sd.prof.command.Cmd;
import ro.utcn.sd.prof.dto.ProposalDTO;
import ro.utcn.sd.prof.event.BaseEvent;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ProposalController {

    private final Cmd cmd;
    private final SimpMessagingTemplate messagingTemplate;


    @PostMapping("/proposals")
    public ProposalDTO createProposal(@RequestBody ProposalDTO dto){
        System.out.println(dto);
        return (ProposalDTO)cmd.execute("createProposal", dto).get(0);
    }


    @EventListener(BaseEvent.class)
    public void handleEvent(BaseEvent event) {
        log.info("Got an event: {}.", event);
        messagingTemplate.convertAndSend("/topic/events", event);
    }

}
