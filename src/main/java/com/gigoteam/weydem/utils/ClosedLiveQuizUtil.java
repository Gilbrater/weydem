package com.gigoteam.weydem.utils;

import com.gigoteam.weydem.models.Quiz;
import com.gigoteam.weydem.models.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Component
public class ClosedLiveQuizUtil {
    private static ConcurrentMap<String, ConcurrentHashMap<String, Quiz>> liveCategories;

    public ClosedLiveQuizUtil(){
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

    public boolean watch(String quizId, String categoryId){
        if(liveCategories.containsKey(categoryId)){
            ConcurrentHashMap<String, Quiz> categoryMap = liveCategories.get(categoryId);
            Quiz quiz = categoryMap.get(quizId);
            quiz.setNumberWatching(quiz.getNumberWatching()+1);
            return true;
        }else{
            return false;
        }
    }

    public int getNumberWatching(String quizId, String categoryId){
        if(liveCategories.containsKey(categoryId)){
            ConcurrentHashMap<String, Quiz> categoryMap = liveCategories.get(categoryId);
            Quiz quiz = categoryMap.get(quizId);
            return quiz.getNumberWatching();
        }else{
            return 0;
        }
    }

    public boolean leave(String quizId, String categoryId){
        if(liveCategories.containsKey(categoryId)){
            ConcurrentHashMap<String, Quiz> categoryMap = liveCategories.get(categoryId);
            Quiz quiz = categoryMap.remove(quizId);
            if(liveCategories.size()==0){
                liveCategories.remove(categoryId);
            }
            return true;
        }else{
            return false;
        }
    }

    public boolean unWatch(String quizId, String categoryId){
        if(liveCategories.containsKey(categoryId)){
            ConcurrentHashMap<String, Quiz> categoryMap = liveCategories.get(categoryId);
            Quiz quiz = categoryMap.get(quizId);
            quiz.setNumberWatching(quiz.getNumberWatching()-1);
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
