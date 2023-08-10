package com.venta.venta.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
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
@Entity
@Table(name = "venta")
public class VentaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    @Column(unique = true)
    public String medicamento;

    @Column
    public String cantidad;

    @Column
    @JsonFormat(pattern = "dd-MM-yyyy")
    public LocalDate fechaVenta;

    @Column
    @JsonFormat(pattern = "HH:mm:ss")
    public LocalTime horaVenta;

    @Column
    public Long valorUnitario;

    @Column
    public Long valorTotal;
}
