package com.medicamento.medicamento.mapper;

import com.medicamento.medicamento.models.MedicamentoDTO;
import com.medicamento.medicamento.models.MedicamentoModel;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MedicamentoMapper {
    MedicamentoDTO toDTO(MedicamentoModel med);
}
