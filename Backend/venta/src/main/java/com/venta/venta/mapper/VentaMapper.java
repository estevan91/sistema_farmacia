package com.venta.venta.mapper;

import com.venta.venta.models.VentaDTO;
import com.venta.venta.models.VentaModel;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface VentaMapper {
    VentaDTO toDTO(VentaModel venta);

    List<VentaDTO> toDTOs(List<VentaModel> ventas);
}
