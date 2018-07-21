package com.gigoteam.weydem.utils;

import com.gigoteam.weydem.models.User;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

public class OnlinePresenceUtil {
    private static OnlinePresenceUtil instance;
    private static ConcurrentMap<String, User> onlineUsers;

    private OnlinePresenceUtil(){
        onlineUsers = new ConcurrentHashMap<>();
    }

    public static OnlinePresenceUtil getInstance(){
        if (instance==null) {
            instance = new OnlinePresenceUtil();
        }
        return instance;
    }

    public synchronized void addUser(User user){
        onlineUsers.put(user.getId(), user);
    }

    public synchronized void removeUser(String id){
        onlineUsers.remove(id);
    }

    public synchronized int count(){
        return onlineUsers.size();
    }
}
