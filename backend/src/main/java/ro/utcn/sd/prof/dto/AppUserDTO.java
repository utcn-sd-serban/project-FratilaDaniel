package ro.utcn.sd.prof.dto;

import lombok.Data;
import ro.utcn.sd.prof.entity.AppUser;

@Data
public class AppUserDTO {

    private int id;
    private String username;
    private String password;
    private String userAttribute;

    public static AppUserDTO ofEntity(AppUser user){
        AppUserDTO userDTO = new AppUserDTO();
        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setPassword(user.getPassword());
        userDTO.setUserAttribute(user.getUserAttribute());
        return userDTO;
    }
}
