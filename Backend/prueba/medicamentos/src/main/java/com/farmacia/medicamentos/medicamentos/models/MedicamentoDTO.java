package com.farmacia.medicamentos.medicamentos.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MedicamentoDTO {
    private String nombre;
    private String laboratorio;
    private String fechaF;
    private String fechaV;
    private String cantidad;
    private String costo;
}
