package ro.utcn.sd.prof.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer ownerId;
    private String title;
    private String description;
    private Double neededSum;
    private Double investedSum;
    private Double completedPercentage;
    private Date dateCreated;
    private String category;


    public Project(int ownerId, String title, String description, double neededSum, double investedSum, double completedPercentage, Date dateCreated, String category){
        this.ownerId = ownerId;
        this.title = title;
        this.description = description;
        this.neededSum = neededSum;
        this.investedSum = investedSum;
        this.completedPercentage = completedPercentage;
        this.dateCreated = dateCreated;
        this.category = category;
    }
}