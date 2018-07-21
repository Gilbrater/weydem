package com.gigoteam.weydem.repository;

import com.gigoteam.weydem.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByRatingLessThan(int rating);

    @Query(value = "{'city':?0}")
    List<User> findByCity(String city);

    @Query(value = "{'country':?0}")
    List<User> findByCountry(String country);

    @Query(value = "{'email':?0}")
    User findByEmail(String email);
}