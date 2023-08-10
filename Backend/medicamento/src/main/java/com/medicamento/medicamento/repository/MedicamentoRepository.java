package com.medicamento.medicamento.repository;

import com.medicamento.medicamento.models.MedicamentoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicamentoRepository extends JpaRepository<MedicamentoModel, Long> {
}
