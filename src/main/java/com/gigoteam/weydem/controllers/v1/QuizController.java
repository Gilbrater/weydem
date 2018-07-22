package com.gigoteam.weydem.controllers.v1;

import com.gigoteam.weydem.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quiz")
public class QuizController {
//    @Autowired
//    private UserRepository userRepository;
//    private OnlinePresenceUtil onlinePresenceUtil = OnlinePresenceUtil.getInstance();
//    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
//
//
//
//
//
//    @GetMapping("")
//    public List<User> getAll(){
//        List<User> users = this.userRepository.findAll();
//        return users;
//    }
//
//    @PutMapping
//    public void update(@RequestBody User user){
//        this.userRepository.save(user);
//    }
//
//    @GetMapping("/{id}")
//    public User getById(@PathVariable("id") String id){
//        User user = this.userRepository.findById(id).get();
//        return user;
//    }
//
//    @DeleteMapping
//    public void delete(@PathVariable("id") String id){
//        this.userRepository.deleteById(id);
//    }
//
//    @GetMapping("/rating/{rating}")
//    public List<User> getByRatingLessThan(@PathVariable("rating") int rating){
//        List<User> users = this.userRepository.findByRatingLessThan(rating);
//        return users;
//    }
//
//    @GetMapping("/city/{city}")
//    public List<User> getByCity(@PathVariable("city") String city){
//        List<User> users = this.userRepository.findByCity(city);
//        return users;
//    }
//
//    @GetMapping("/country/{country}")
//    public List<User> getByCountry(@PathVariable("country") String country){
//        List<User> users = this.userRepository.findByCountry(country);
//        return users;
//    }
//
//    @GetMapping("/online")
//    public int getOnlineUsers(){
//        return onlinePresenceUtil.count();
//    }
}
