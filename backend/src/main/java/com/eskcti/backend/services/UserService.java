package com.eskcti.backend.services;

import com.eskcti.backend.entities.User;
import com.eskcti.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public User create(User user) {
        return repository.save(user);
    }

    public User update(User user) {
        User userUpdate = repository.findById(user.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        userUpdate.setName(user.getName());
        userUpdate.setEmail(user.getEmail());
        userUpdate.setAddress(user.getAddress());
        return repository.save(userUpdate);
    }

    public User find(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public List<User> listAll() {
        return repository.findAll();
    }

    public void delete(Long id) {
        User user = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        repository.delete(user);
    }
}
