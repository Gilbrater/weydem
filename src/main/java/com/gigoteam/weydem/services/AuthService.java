package com.gigoteam.weydem.services;

import com.gigoteam.weydem.models.AuthData;
import com.gigoteam.weydem.models.User;
import com.gigoteam.weydem.repository.UserRepository;
import com.gigoteam.weydem.utils.OnlinePresenceUtil;
import com.google.common.hash.Hashing;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;
    private OnlinePresenceUtil onlinePresenceUtil;
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    public AuthService(){
        onlinePresenceUtil = OnlinePresenceUtil.getInstance();
    }

    public User login(AuthData authData){
        User user = new User();
        try {
            user = getUserByEmail(authData.getEmail());
            if(user!=null){
                String passwordHash = hashPassword(authData.getPassword());
                if(!user.getPasswordHash().equals(passwordHash)){
                    user=null;
                }
            }
        }catch(Exception ex){
            logger.error(ex.getMessage());
            throw new Error(ex.getMessage());
        }
        return user;
    }

    public User signUp(AuthData authData){
        User user = getUserByEmail(authData.getEmail());

        if(user==null){
            Gson gson = new Gson();
            User newUser = gson.fromJson(gson.toJson(authData), User.class);
            newUser.setPasswordHash(hashPassword(authData.getPassword()));
            User createdUser = this.userRepository.insert(newUser);
            onlinePresenceUtil.addUser(createdUser);
            return newUser;
        }else{
            return user;
        }
    }

    public void logout(String id){
        onlinePresenceUtil.removeUser(id);
    }

    private String hashPassword(String password){
        return Hashing.sha256()
                .hashString(password, StandardCharsets.UTF_8)
                .toString();
    }

    private User getUserByEmail(String email){
        return this.userRepository.findByEmail(email);
    }
}
