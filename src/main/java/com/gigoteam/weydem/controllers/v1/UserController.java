package com.gigoteam.weydem.controllers.v1;

import com.gigoteam.weydem.models.User;
import com.gigoteam.weydem.repository.UserRepository;
import com.gigoteam.weydem.utils.OnlinePresenceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OnlinePresenceUtil onlinePresenceUtil;

    @GetMapping("")
    public List<User> getAll(){
        List<User> users = this.userRepository.findAll();
        return users;
    }

    @PutMapping
    public void update(@RequestBody User user){
        this.userRepository.save(user);
    }

    @GetMapping("/{id}")
    public User getById(@PathVariable("id") String id){
        User user = this.userRepository.findById(id).get();
        return user;
    }

    @DeleteMapping
    public void delete(@PathVariable("id") String id){
        this.userRepository.deleteById(id);
    }

    @GetMapping("/rating/{rating}")
    public List<User> getByRatingLessThan(@PathVariable("rating") int rating){
        List<User> users = this.userRepository.findByRatingLessThan(rating);
        return users;
    }

    @GetMapping("/city/{city}")
    public List<User> getByCity(@PathVariable("city") String city){
        List<User> users = this.userRepository.findByCity(city);
        return users;
    }

    @GetMapping("/country/{country}")
    public List<User> getByCountry(@PathVariable("country") String country){
        List<User> users = this.userRepository.findByCountry(country);
        return users;
    }

    @GetMapping("/online")
    public int getOnlineUsers(){
        return onlinePresenceUtil.count();
    }
}
