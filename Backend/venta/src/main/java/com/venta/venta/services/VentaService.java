package com.venta.venta.services;

import com.venta.venta.mapper.VentaMapper;
import com.venta.venta.models.VentaDTO;
import com.venta.venta.models.VentaModel;
import com.venta.venta.repository.VentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class VentaService {

    @Autowired
    private VentaRepository ventaRepository;
    @Autowired
    private VentaMapper ventaMapper;
    public List<VentaModel> findAll(){
        return this.ventaRepository.findAll();
    }

    public VentaDTO loot(VentaModel almacenado){
        VentaModel venta = this.ventaRepository.save(almacenado);
        return this.ventaMapper.toDTO(venta);
    }

    public VentaDTO findById(long id) {
        return this.ventaMapper.toDTO(this.ventaRepository.findById(id).get());
    }

    public VentaDTO actualizar(VentaModel venta){
        Optional<VentaModel> ventaDB = this.ventaRepository.findById(venta.getId());
        if (ventaDB.isPresent()) {
            VentaModel ventaDBActual = ventaDB.get();
            if (venta.getMedicamento() != ventaDBActual.getMedicamento()){
                ventaDBActual.setMedicamento(venta.getMedicamento());
            }
            if (venta.getCantidad() != ventaDBActual.getCantidad()){
                ventaDBActual.setCantidad(venta.getCantidad());
            }
            if (venta.getFechaVenta() != ventaDBActual.getFechaVenta()){
                ventaDBActual.setFechaVenta(venta.getFechaVenta());
            }
            if (venta.getHoraVenta() != ventaDBActual.getHoraVenta()){
                ventaDBActual.setHoraVenta(venta.getHoraVenta());
            }
            if (venta.getValorUnitario() != ventaDBActual.getValorUnitario()){
                ventaDBActual.setValorUnitario(venta.getValorUnitario());
            }
            if (venta.getValorTotal() != ventaDBActual.getValorUnitario()){
                ventaDBActual.setValorUnitario(venta.getValorUnitario());
            }
            return this.ventaMapper.toDTO(this.ventaRepository.save(ventaDBActual));
        } else return null;
    }

    public Boolean eliminar(Long id){
        try{
            this.ventaRepository.deleteById(id);
            return true;
        } catch(Exception e){
            return false;
        }
    }

    public List<VentaDTO> getPorFecha(String inicio, String finalF) {
        Integer dayInicio = Integer.parseInt(inicio.split("-")[0]);
        Integer monthInicio = Integer.parseInt(inicio.split("-")[1]);
        Integer yearInicio = Integer.parseInt(inicio.split("-")[2]);
        Integer dayFin = Integer.parseInt(finalF.split("-")[0]);
        Integer monthFin = Integer.parseInt(finalF.split("-")[1]);
        Integer yearFin= Integer.parseInt(finalF.split("-")[2]);
        LocalDate inicioDB = LocalDate.of(yearInicio, monthInicio, dayInicio);
        LocalDate finalDB = LocalDate.of(yearFin, monthFin, dayFin);
        return this.ventaMapper.toDTOs(this.ventaRepository.findByFechaVentaBetween(inicioDB, finalDB));
    }
}
