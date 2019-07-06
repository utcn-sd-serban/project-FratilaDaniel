package ro.utcn.sd.prof.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.utcn.sd.prof.entity.Proposal;

public interface ProposalRepository extends JpaRepository<Proposal, Integer> {

}
