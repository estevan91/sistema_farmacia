package com.farmacia.medicamentos.medicamentos.services;

import com.farmacia.medicamentos.medicamentos.mapper.MedicamentoModelDTO;
import com.farmacia.medicamentos.medicamentos.models.MedicamentoDTO;
import com.farmacia.medicamentos.medicamentos.models.MedicamentoModel;
import com.farmacia.medicamentos.medicamentos.repository.MedicamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicamentoService {

     @Autowired
     private MedicamentoRepository medicamentoRepository;
     @Autowired
     private MedicamentoModelDTO medicamentoModelDTO;
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

    public Boolean eliminar(Long id){
        try{
            this.medicamentoRepository.deleteById(id);
            return true;
        } catch(Exception e){
            return false;
        }
    }
}
