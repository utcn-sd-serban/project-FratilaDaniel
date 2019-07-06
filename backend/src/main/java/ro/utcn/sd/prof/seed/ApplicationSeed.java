package ro.utcn.sd.prof.seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.prof.entity.*;
import ro.utcn.sd.prof.repository.*;

import java.util.*;

@Component
@RequiredArgsConstructor
public class ApplicationSeed implements CommandLineRunner {
    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;

    private final ProjectRepository projectRepository;

    @Override
    @Transactional
    public void run(String... args) {
        AppUser serban = new AppUser("serban", passwordEncoder.encode("password"), "investor");
        AppUser dani = new AppUser("dani", passwordEncoder.encode("pass"), "innovator");
        AppUser admin = new AppUser("admin", passwordEncoder.encode("admin"), "admin");

        appUserRepository.save(serban);
        appUserRepository.save(dani);
        appUserRepository.save(admin);

        Project project1 = new Project(1,"proj1","best proj",1000.5,1000.4,1000.4/1000.5*100, new Date(), "smart homes");
        Project project2 = new Project(3,"proj2","even better proj",5000.5,1050.4,1050.4/5000.5*100, new Date(), "education");
        Project project3 = new Project(2,"proj3","worst proj ever",500000,1050,1050/500000*100, new Date(), "smart homes");
        projectRepository.save(project1);
        projectRepository.save(project2);
        projectRepository.save(project3);


    }
}
