package ro.utcn.sd.prof.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.prof.dto.AppUserDTO;
import ro.utcn.sd.prof.entity.AppUser;
import ro.utcn.sd.prof.repository.AppUserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AppUserService {

    private final AppUserRepository repository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public AppUserDTO createUser(AppUserDTO user){
        if(!repository.findByUsername(user.getUsername()).isPresent()) {
            AppUser appUser = new AppUser();

            appUser.setUsername(user.getUsername());
            appUser.setPassword(passwordEncoder.encode(user.getPassword()));
            appUser.setUserAttribute(user.getUserAttribute());
            repository.save(appUser);

            return AppUserDTO.ofEntity(appUser);
        } else {
            System.out.println("Username exists");
            return null;
        }
    }

    public void deleteUser(AppUserDTO user){//de fapt am doar username aiic
        repository.delete(repository.findByUsername(user.getUsername()).get());
    }

    @Transactional
    public AppUserDTO validateUser(AppUserDTO user){
        if(!repository.findByUsername(user.getUsername()).isPresent()
                //||
                //repository.findByUsername(user.getUsername()).isPresent() && repository.findByUsername(user.getUsername()).get().getPassword() != passwordEncoder.encode(user.getPassword())
        ){
            System.out.println("bad login");
            return null; //throw exception
        }
        System.out.println("goodlogin");
        System.out.println(AppUserDTO.ofEntity(repository.findByUsername(user.getUsername()).get()));
        return AppUserDTO.ofEntity(repository.findByUsername(user.getUsername()).get());
    }

    @Transactional
    public List<AppUserDTO> readAllUsers(){
        List<AppUserDTO> list = new ArrayList<>();
        for(AppUser appUser :repository.findAll()) {
            list.add(AppUserDTO.ofEntity(appUser));
            System.out.println(appUser);
        }
        return list;
    }
}
