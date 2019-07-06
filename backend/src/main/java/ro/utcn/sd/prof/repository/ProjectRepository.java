package ro.utcn.sd.prof.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.utcn.sd.prof.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
    Project findByTitle(String title);
}
