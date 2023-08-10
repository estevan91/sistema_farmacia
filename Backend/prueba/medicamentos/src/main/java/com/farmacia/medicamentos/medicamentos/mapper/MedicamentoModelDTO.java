package com.farmacia.medicamentos.medicamentos.mapper;

import com.farmacia.medicamentos.medicamentos.models.MedicamentoDTO;
import com.farmacia.medicamentos.medicamentos.models.MedicamentoModel;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MedicamentoModelDTO {
    MedicamentoDTO toDTO(MedicamentoModel med);
}
