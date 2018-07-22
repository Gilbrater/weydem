package com.gigoteam.weydem.utils;

import com.gigoteam.weydem.models.User;
import org.springframework.stereotype.Component;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Component
public class OnlinePresenceUtil {
    private static ConcurrentMap<String, User> onlineUsers = new ConcurrentHashMap<>();

    public synchronized void addUser(User user){
        onlineUsers.put(user.getId(), user);
    }

    public synchronized void removeUser(String id){
        onlineUsers.remove(id);
    }

    public synchronized boolean hasUser(String id){
        return onlineUsers.containsKey(id);
    }

    public synchronized int count(){
        return onlineUsers.size();
    }
}
