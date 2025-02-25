package com.example.cpu.Services;

import com.example.cpu.Models.Socket;
import com.example.cpu.Repositories.SocketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class SocketService {
    @Autowired
    private SocketRepository socketRepository;

    public List<Socket> getAllSockets() {
        return socketRepository.findAll();
    }
}