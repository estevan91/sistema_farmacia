package com.farmacia.medicamentos.medicamentos.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Medicamento")
public class MedicamentoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column
    public String nombre;

    @Column
    public String laboratorio;

    @Column
    @JsonFormat(pattern = "dd-MM-yyyy")
    public LocalDate fechaF;

    @Column
    @JsonFormat(pattern = "dd-MM-yyyy")
    public LocalDate fechaV;

    @Column
    public Long cantidad;

    @Column
    public Long costo;
}
