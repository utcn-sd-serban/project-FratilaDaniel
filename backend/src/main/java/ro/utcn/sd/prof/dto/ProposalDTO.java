package ro.utcn.sd.prof.dto;

import lombok.Data;

@Data
public class ProposalDTO {

    private String investorUsername;
    private String innovatorUsername;
    private String description;

    public static ProposalDTO ofEntity(String investorUsername, String innovatorUsername, String description){
        ProposalDTO proposalDTO = new ProposalDTO();

        proposalDTO.investorUsername = investorUsername;
        proposalDTO.innovatorUsername = innovatorUsername;
        proposalDTO.description = description;

        return proposalDTO;
    }
}
