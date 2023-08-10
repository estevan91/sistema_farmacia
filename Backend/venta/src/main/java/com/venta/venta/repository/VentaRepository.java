package com.venta.venta.repository;

import com.venta.venta.models.VentaModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface VentaRepository extends JpaRepository<VentaModel, Long> {
    public List<VentaModel> findByFechaVentaBetween(LocalDate inicio, LocalDate finalF);
}
