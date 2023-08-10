package com.venta.venta.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VentaDTO {
    public String medicamento;
    public String cantidad;
    public LocalDate fechaVenta;
    public LocalTime horaVenta;
    public Long valorUnitario;
    public Long valorTotal;
}
