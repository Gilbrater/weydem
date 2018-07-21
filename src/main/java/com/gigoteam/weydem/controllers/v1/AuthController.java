package com.gigoteam.weydem.controllers.v1;

import com.gigoteam.weydem.models.AuthData;
import com.gigoteam.weydem.models.User;
import com.gigoteam.weydem.services.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);


    @PostMapping("/signup")
    public User insert(@RequestBody AuthData authData){
        User user = authService.signUp(authData);
        if(user==null){
            throw new Error("Signup unsuccessful");
        }else{
            return user;
        }
    }

    @PostMapping("/login")
    public User login(@RequestBody AuthData authData){
        User user = authService.login(authData);
        if(user==null){
            throw new Error("Login unsuccessful");
        }else{
            return user;
        }
    }

    @GetMapping("/logout/{id}")
    public void logout(@PathVariable("id") String id){
        authService.logout(id);
    }
}
