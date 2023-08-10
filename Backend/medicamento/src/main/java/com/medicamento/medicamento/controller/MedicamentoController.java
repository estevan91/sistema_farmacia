package com.medicamento.medicamento.controller;

import com.medicamento.medicamento.models.MedicamentoDTO;
import com.medicamento.medicamento.models.MedicamentoModel;
import com.medicamento.medicamento.services.MedicamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicamento")
public class MedicamentoController {

    @Autowired
    private MedicamentoService medicamentoService;
    @CrossOrigin(origins = "*")
    @GetMapping
    public List<MedicamentoModel> enlistar(){
        return this.medicamentoService.findAll();

    }
    @CrossOrigin(origins = "*")
    @GetMapping("/{id}")
    public MedicamentoDTO enlistar(@PathVariable("id") long id){
        return this.medicamentoService.findById(id);

    }
    @CrossOrigin(origins = "*")
    @PostMapping
    public MedicamentoDTO guardar(@RequestBody MedicamentoModel medicamento) {
        return this.medicamentoService.loot(medicamento);
    }
    @CrossOrigin(origins = "*")
    @PutMapping
    public MedicamentoDTO actualizar(@RequestBody MedicamentoModel med) {
        return this.medicamentoService.actualizar(med);
    }
    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public boolean eliminar(@PathVariable("id") long id){
        return this.medicamentoService.eliminar(id);
    }
}
