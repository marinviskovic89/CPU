package com.example.cpu.Controllers;
import com.example.cpu.Models.Cpu;
import com.example.cpu.Services.CpuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CpuController {


    @Autowired
    private CpuService cpuService;

    @GetMapping("/cpus")
    public List<Cpu> getAllCpus() {
        return cpuService.getAllCpus();
    }

    @GetMapping("/cpus/{id}")
    public Optional<Cpu> getCpuById(@PathVariable Long id) {
        System.out.println("Updating CPU with ID: " + id);
        return cpuService.getCpuById(id);
    }

    @PostMapping("/")
    public Cpu saveCpu(@RequestBody Cpu cpu) {
        return cpuService.saveCpu(cpu);
    }
    @PutMapping("/cpus/{id}")
    public ResponseEntity<Cpu> updateCpu(@PathVariable Long id, @RequestBody Cpu cpu) {
        Optional<Cpu> existingCpu = cpuService.getCpuById(id);
        if (existingCpu == null) {
            return ResponseEntity.notFound().build();
        }

        cpu.setId(id);
        Cpu updatedCpu = cpuService.saveCpu(cpu);
        return ResponseEntity.ok(updatedCpu);
    }
}
