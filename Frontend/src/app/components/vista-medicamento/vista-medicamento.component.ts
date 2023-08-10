import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento';
import { BackendService } from 'src/app/services/backend.service';

import { ConfirmationService, MessageService, PrimeNGConfig, SelectItem, FilterMatchMode, FilterService } from 'primeng/api';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Venta } from 'src/app/models/venta';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vista-medicamento',
  templateUrl: './vista-medicamento.component.html',
  styleUrls: ['./vista-medicamento.component.scss'],
  providers: [ConfirmationService, MessageService, FilterService]
})
export class VistaMedicamentoComponent implements OnInit {
  meds!: Medicamento[];
  cols!: { field: string, header: string }[];
  matchModeOptions!: SelectItem[];
  visible: boolean = false;

  modalVentaForm!: FormGroup;
  medVenta!: Medicamento;

  datePipe: DatePipe = new DatePipe("en-US");

  constructor(
    private router: Router,
    private backend: BackendService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.filterConfig();
    this.primengConfig.ripple = true;
    this.obtenerMedicinas();

    this.modalVentaForm = new FormGroup({
      nombre: new FormControl(),
      cantidad: new FormControl(),
      valorUnitario: new FormControl(),
    })
  }

  filterConfig() {
    let customFilterName = 'custom-equals';
    this.filterService.register(customFilterName, (value: any, filter: any): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }
      if (value === undefined || value === null) {
        return false;
      }
      return value.toString() === filter.toString();
    });

    this.cols = [
      { field: 'id', header: "Id" },
      { field: 'nombre', header: "Nombre" },
      { field: 'laboratorio', header: "Laboratorio" },
      { field: 'fechaF', header: "Fecha fabricación" },
      { field: 'fechaV', header: "Fecha vencimiento" },
      { field: 'cantidad', header: "Stock" },
      { field: 'costo', header: "Valor unitario" }
    ];

    this.matchModeOptions = [
      { label: 'Custom Equals', value: FilterMatchMode.EQUALS },
      { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contains', value: FilterMatchMode.CONTAINS }
    ];
  }

  obtenerMedicinas() {
    this.backend.obtenerMedicinas().subscribe({
      next: (medDB) => {
        if (medDB === null) {
          this.messageService.add({ severity: 'info', summary: 'Aviso', detail: 'No se han encontrado medicamentos en el periodo seleccionado.', life: 1000 })
        } 
        this.meds = medDB;
      }
    })
  }

  updateMed(med: Medicamento) {
    this.router.navigate(['/actualizar', med.id]);
  }

  deleteMed(med: Medicamento) {
    this.confirmationService.confirm({
      message: `Quieres borrar ${med.nombre}?`,
      header: 'Confirmación de borrado',
      icon: 'pi pi-info-circle',
      accept: () => {
        if (typeof med.id !== 'undefined') {
          this.backend.borrarMed(med.id).subscribe({
            next: (next) => {
              if (next as boolean) {
                this.messageService.add({ severity: 'success', summary: 'Aviso', detail: 'Producto eliminado'});
                this.obtenerMedicinas();
              } else {
                this.messageService.add({ severity: 'error', summary: 'Aviso', detail: 'Ocurrio un evento inesperado'});
              }
            }
          });
        }
      }
    });
  }

  displayVenta(med: Medicamento) {
    this.visible = true;
    this.modalVentaForm.controls['nombre'].setValue(med.nombre);
    this.modalVentaForm.controls['valorUnitario'].setValue(med.costo);

    this.medVenta = med;
  }

  updateValor(valorUnitario: number) {
    this.modalVentaForm.controls['valorTotal'].setValue(valorUnitario * this.modalVentaForm.value.cantidad);
  }

  sellMed() {
    let date = new Date()
    let valorTotal = this.modalVentaForm.value.valorUnitario * this.modalVentaForm.value.cantidad;
    let venta: Venta = new Venta(this.datePipe.transform(date, "dd-MM-yyyy") as string, this.datePipe.transform(date, "HH:mm:ss") as string, this.modalVentaForm.value.nombre, this.modalVentaForm.value.cantidad, this.modalVentaForm.value.valorUnitario, valorTotal);

    if (this.medVenta.cantidad - parseInt(this.modalVentaForm.value.cantidad) >= 0) {
      this.medVenta.cantidad -= parseInt(this.modalVentaForm.value.cantidad);
      this.backend.agregarVenta(venta).subscribe({
        next: () => {
          this.backend.actualizarMed(this.medVenta).subscribe();
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Venta realizada con éxito', life: 1000 })
          this.visible = false;
          this.modalVentaForm.reset();
        },
        complete: () => {
          this.obtenerMedicinas();
        }
      });
    } else {
      this.visible = false;
      this.modalVentaForm.reset();
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'En este momento no hay existencias', life: 1000 })
    }
  }

}
