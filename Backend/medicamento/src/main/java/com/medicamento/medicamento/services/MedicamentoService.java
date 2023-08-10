package com.medicamento.medicamento.services;

import com.medicamento.medicamento.mapper.MedicamentoMapper;
import com.medicamento.medicamento.models.MedicamentoDTO;
import com.medicamento.medicamento.models.MedicamentoModel;
import com.medicamento.medicamento.repository.MedicamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicamentoService {

    @Autowired
    private MedicamentoRepository medicamentoRepository;
    @Autowired
    private MedicamentoMapper medicamentoModelDTO;
    public List<MedicamentoModel> findAll(){
        return this.medicamentoRepository.findAll();
    }

    public MedicamentoDTO loot(MedicamentoModel almacenado){
        MedicamentoModel med = this.medicamentoRepository.save(almacenado);
        return this.medicamentoModelDTO.toDTO(med);
    }

    public MedicamentoDTO findById(long id) {
        return this.medicamentoModelDTO.toDTO(this.medicamentoRepository.findById(id).get());
    }

    public MedicamentoDTO actualizar(MedicamentoModel med){
        Optional<MedicamentoModel> medDB = this.medicamentoRepository.findById(med.getId());
        if (medDB.isPresent()) {
            MedicamentoModel medDBActual = medDB.get();
            if (med.getNombre() != medDBActual.getNombre()){
                medDBActual.setNombre(med.getNombre());
            }
            if (med.getLaboratorio() != medDBActual.getLaboratorio()){
                medDBActual.setLaboratorio(med.getLaboratorio());
            }
            if (med.getFechaF() != medDBActual.getFechaF()){
                medDBActual.setFechaF(med.getFechaF());
            }
            if (med.getFechaV() != medDBActual.getFechaV()){
                medDBActual.setFechaV(med.getFechaV());
            }
            if (med.getCantidad() != medDBActual.getCantidad()){
                medDBActual.setCantidad(med.getCantidad());
            }
            if (med.getCosto() != medDBActual.getCosto()){
                medDBActual.setCosto(med.getCosto());
            }
            return this.medicamentoModelDTO.toDTO(this.medicamentoRepository.save(medDBActual));
        } else return null;
    }

    public Boolean eliminar(Long id){
        try{
            this.medicamentoRepository.deleteById(id);
            return true;
        } catch(Exception e){
            return false;
        }
    }
}
