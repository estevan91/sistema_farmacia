package com.venta.venta.controller;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.venta.venta.models.VentaDTO;
import com.venta.venta.models.VentaModel;
import com.venta.venta.services.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/venta")
public class VentaController {

    @Autowired
    private VentaService ventaService;
    @CrossOrigin(origins = "*")
    @GetMapping
    public List<VentaModel> enlistar(){
        return this.ventaService.findAll();

    }
    @CrossOrigin(origins = "*")
    @GetMapping("/{id}")
    public VentaDTO enlistar(@PathVariable("id") long id){
        return this.ventaService.findById(id);

    }
    @CrossOrigin(origins = "*")
    @PostMapping
    public VentaDTO guardar(@RequestBody VentaModel medicamento) {
        return this.ventaService.loot(medicamento);
    }
    @CrossOrigin(origins = "*")
    @PutMapping
    public VentaDTO actualizar(@RequestBody VentaModel med) {
        return this.ventaService.actualizar(med);
    }
    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public boolean eliminar(@PathVariable("id") long id){
        return this.ventaService.eliminar(id);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/fecha/{inicio}/{finalF}")
    public List<VentaDTO> getPorFecha(@PathVariable("inicio") String inicio, @PathVariable("final") String finalF) {
        return this.ventaService.getPorFecha(inicio, finalF);
    }
}
