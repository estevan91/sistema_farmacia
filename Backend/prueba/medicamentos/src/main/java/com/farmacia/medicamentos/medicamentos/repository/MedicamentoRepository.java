package com.farmacia.medicamentos.medicamentos.repository;

import com.farmacia.medicamentos.medicamentos.models.MedicamentoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicamentoRepository extends JpaRepository<MedicamentoModel, Long> {
}
