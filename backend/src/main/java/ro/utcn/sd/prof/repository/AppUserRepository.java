package ro.utcn.sd.prof.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.utcn.sd.prof.entity.AppUser;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, Integer> {
    Optional<AppUser> findByUsername(String Username);
}
