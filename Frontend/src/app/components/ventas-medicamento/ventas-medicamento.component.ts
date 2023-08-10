import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { BackendService } from 'src/app/services/backend.service';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-venta-medicamento',
  templateUrl: './ventas-medicamento.component.html',
  styleUrls: ['./ventas-medicamento.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class VentaMedicamentoComponent implements OnInit {
  ventas!: Venta[];
  cols!: { field: string, header: string }[];

  datePipe = new DatePipe("en-US");

  filterDateForm!: FormGroup;

  constructor(
    public backend: BackendService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getVentas();

    this.cols = [
      { field: "id", header: "Id" },
      { field: "medicamento", header: "Medicamento" },
      { field: "horaVenta", header: "Hora" },
      { field: "fechaVenta", header: "Fecha" },
      { field: "cantidad", header: "Cantidad" },
      { field: "valorUnitario", header: "Valor unitario" },
      { field: "valorTotal", header: "Valor Total" },
    ];

    this.filterDateForm = new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    })
  }

  getVentas() {
    this.backend.obtenerVentas().subscribe({
      next: (ventasDB) => {
        if (ventasDB !== null) {
          this.ventas = ventasDB as Venta[];
        } else {
          this.messageService.add({ severity: 'info', summary: 'Aviso', detail: 'No se registran medicamentos en el periodo seleccionado.' })
        }
      }
    })
  }

  filtrarVentasByDate() {
    let inicio: string = this.datePipe.transform(new Date(this.filterDateForm.value.from), "dd-MM-yyyy") as string;
    let fin: string = this.datePipe.transform(new Date(this.filterDateForm.value.to), "dd-MM-yyyy") as string;
    
    this.backend.obtenerVentasEntreFecha(inicio, fin).subscribe({
      next: (ventasDB) => {
        if (ventasDB === null) {
          this.messageService.add({ severity: 'info', summary: 'Aviso', detail: 'No se registran ventas en le periodo seleccionado ' })
        } else {
          this.ventas = ventasDB as Venta[];
        }
      }
    })
  }
}
