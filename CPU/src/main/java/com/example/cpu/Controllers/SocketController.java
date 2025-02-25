package com.example.cpu.Controllers;

import com.example.cpu.Models.Socket;
import com.example.cpu.Services.SocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SocketController {

    @Autowired
    private SocketService socketService;

    @GetMapping("/sockets")
    public List<Socket> getAllSockets() {
        return socketService.getAllSockets();
    }
}
