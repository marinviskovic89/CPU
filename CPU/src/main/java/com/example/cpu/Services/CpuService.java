package com.example.cpu.Services;

import com.example.cpu.Models.Cpu;
import com.example.cpu.Repositories.CpuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CpuService {
    @Autowired
    private CpuRepository cpuRepository;

    public List<Cpu> getAllCpus() {
        return cpuRepository.findAll();
    }

    public Optional<Cpu> getCpuById(Long id) {
        return cpuRepository.findById(id);
    }

    public Cpu saveCpu(Cpu cpu) {
        return cpuRepository.save(cpu);
    }
}
