package ro.utcn.sd.prof.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ro.utcn.sd.prof.command.Cmd;
import ro.utcn.sd.prof.dto.AppUserDTO;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AppUserController {

    private final Cmd cmd;

    @GetMapping("/me")
    public AppUserDTO readCurrent() {
        return (AppUserDTO)cmd.execute("viewDetails", null).get(0);
    }

    @PostMapping("/users")
    public AppUserDTO createUser(@RequestBody AppUserDTO dto){
        return (AppUserDTO)cmd.execute("createUser", dto).get(0);
    }

    @DeleteMapping("/users")
    public void deleteUser(@RequestBody AppUserDTO dto){
        cmd.execute("deleteUser", dto);
    }

    @PostMapping("/login")
    public AppUserDTO readUser(@RequestBody AppUserDTO dto){
        System.out.println("ajung aiic  ");
        return (AppUserDTO)cmd.execute("readUser", dto).get(0);
    }

    @GetMapping("/users")
    public List<AppUserDTO> readAllUsers(){
        return cmd.execute("readAllUsers", null);
    }
}
