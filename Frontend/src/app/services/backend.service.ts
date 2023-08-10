import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicamento } from '../models/medicamento';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private clienteHttp: HttpClient
  ) { }

  medURL = "http://localhost:8080/medicamento"
  ventaURL = "http://localhost:8081/venta"

  obtenerMedicinas(): Observable<Medicamento[]> {
    return this.clienteHttp.get<Medicamento[]>(this.medURL);
  }

  agregarMed(med: Medicamento): Observable<Medicamento> {
    return this.clienteHttp.post<Medicamento>(this.medURL, med);
  }

  actualizarMed(med: Medicamento): Observable<Medicamento> {
    return this.clienteHttp.put<Medicamento>(this.medURL, med);
  }

  borrarMed(medId: number) {
    return this.clienteHttp.delete(`${this.medURL}/${medId}`);
  }

  obtenerPorId(medId: number): Observable<Medicamento> {
    return this.clienteHttp.get<Medicamento>(`${this.medURL}/${medId}`);
  }

  obtenerVentas(): Observable<Venta[]> {
    return this.clienteHttp.get<Venta[]>(this.ventaURL);
  }

  agregarVenta(venta: Venta): Observable<Venta> {
    return this.clienteHttp.post<Venta>(this.ventaURL, venta);
  }

  obtenerVentasEntreFecha(inicio: string, fin: string){
    return this.clienteHttp.get<Venta[]>(`${this.ventaURL}/fecha/${inicio}/${fin}`);
  }
}
