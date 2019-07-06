package ro.utcn.sd.prof.service;

import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import ro.utcn.sd.prof.dto.ProposalDTO;
import ro.utcn.sd.prof.entity.Proposal;
import ro.utcn.sd.prof.repository.AppUserRepository;
import ro.utcn.sd.prof.repository.ProposalRepository;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class ProposalService {

    private final ProposalRepository proposalRepository;
    private final AppUserRepository appUserRepository;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public ProposalDTO createProposal(ProposalDTO proposalDTO) {
        Proposal proposal = new Proposal();

        proposal.setInvestorId(appUserRepository.findByUsername(proposalDTO.getInvestorUsername()).get().getId());
        proposal.setInnovatorId(appUserRepository.findByUsername(proposalDTO.getInnovatorUsername()).get().getId());
        proposal.setDescription(proposalDTO.getDescription());
        proposalRepository.save(proposal);

        return proposalDTO;
    }

}
