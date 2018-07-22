package com.gigoteam.weydem.utils;

import com.gigoteam.weydem.models.Quiz;
import com.gigoteam.weydem.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Component
public class OpenLiveQuizUtil {
    private static ConcurrentMap<String, ConcurrentHashMap<String, Quiz>> liveCategories;

    @Autowired
    private ClosedLiveQuizUtil closedLiveQuizUtil;

    public OpenLiveQuizUtil(){
        liveCategories = new ConcurrentHashMap<>();
    }

    public void add(Quiz quiz){
        String categoryId=quiz.getCategoryId();
        if(liveCategories.containsKey(categoryId)){
            ConcurrentHashMap<String, Quiz> categoryMap = liveCategories.get(categoryId);
            categoryMap.put(quiz.getId(), quiz);
        }else{
            ConcurrentHashMap categoryMap = new ConcurrentHashMap<String, Quiz>();
            categoryMap.put(quiz.getId(), quiz);
            liveCategories.put(categoryId, categoryMap);
        }
    }

    public boolean join(User user, String categoryId, String quizId){
        if(liveCategories.containsKey(categoryId)){
            ConcurrentHashMap<String, Quiz> categoryMap = liveCategories.get(categoryId);
            Quiz quiz = categoryMap.remove(quizId);
            List<User> players = quiz.getPlayers();
            players.add(user);
            quiz.setPlayers(players);
            closedLiveQuizUtil.add(quiz);
            if(liveCategories.size()==0){
                liveCategories.remove(categoryId);
            }
            return true;
        }else{
            return false;
        }

    }

    public int count(String categoryId){
        int count = 0;
        if(liveCategories.containsKey(categoryId)){
            count = liveCategories.remove(categoryId).size();
        }
        return count;
    }
}
