package com.example.cpu.Models;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cpu")
public class Cpu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;
    private String model;
    private double clockspeed;
    private int numCores;
    private int numThreads;
    private double tdp;
    private double price;

    @ManyToOne
    @JoinColumn(name = "socket_id", referencedColumnName = "id")
    private Socket socket;

}

