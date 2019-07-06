package ro.utcn.sd.prof.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class AppUser {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String password;
	private String userAttribute;

	public AppUser(String username, String password, String userAttribute){
		this.username = username;
		this.password = password;
		this.userAttribute = userAttribute;
	}
}
