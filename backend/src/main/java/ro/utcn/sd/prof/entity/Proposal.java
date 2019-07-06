package ro.utcn.sd.prof.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Proposal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer investorId;
    private Integer innovatorId;
    private String description;
    private Float neededSum;
    private Float investedSum;

    public Proposal(int investorId, int innovatorId, String description, float neededSum, float investedSum){
        this.investorId = investorId;
        this.innovatorId = innovatorId;
        this.description = description;
        this.neededSum = neededSum;
        this.investedSum = investedSum;
    }
}