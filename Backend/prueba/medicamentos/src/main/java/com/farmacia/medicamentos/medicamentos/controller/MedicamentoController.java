package com.farmacia.medicamentos.medicamentos.controller;

import com.farmacia.medicamentos.medicamentos.models.MedicamentoDTO;
import com.farmacia.medicamentos.medicamentos.models.MedicamentoModel;
import com.farmacia.medicamentos.medicamentos.services.MedicamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicamento")
public class MedicamentoController {

    @Autowired
    private MedicamentoService medicamentoService;
    @GetMapping
    public List<MedicamentoModel> enlistar(){
        return this.medicamentoService.findAll();

    }
    @GetMapping("/{id}")
    public MedicamentoDTO enlistar(@PathVariable("id") long id){
        return this.medicamentoService.findById(id);

    }
    @PostMapping
    public MedicamentoDTO guardar(@RequestBody MedicamentoModel medicamento){
        return this.medicamentoService.loot(medicamento);
    }
    @DeleteMapping
    public boolean eliminar(@PathVariable("id") long id){
        return this.medicamentoService.eliminar(id);
    }
}
