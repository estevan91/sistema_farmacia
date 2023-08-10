import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Medicamento } from 'src/app/models/medicamento';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-actualizar-medicamento',
  templateUrl: './actualizar-medicamento.component.html',
  styleUrls: ['./actualizar-medicamento.component.scss'],
  providers: [MessageService],
})
export class ActualizarMedicamentoComponent implements OnInit {
  medicinaFormulario!: Medicamento;
  form!: FormGroup;
  titulo = 'Actualizar Medicamento';
  msgButton = 'Actualizar';
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.obtenerMedicamento();
    this.form = new FormGroup({
      nombre: new FormControl(''),
      laboratorio: new FormControl(''),
      fechaF: new FormControl(''),
      fechaV: new FormControl(''),
      cantidad: new FormControl(''),
      costo: new FormControl(''),
    });
  }

  obtenerMedicamento() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.backend.obtenerPorId(this.id).subscribe({
      next: (medicina) => {
        this.medicinaFormulario = medicina;
        this.inicializarFormulario(this.medicinaFormulario);
      },
    });
  }

  inicializarFormulario(med: Medicamento) {

    let dayF = parseInt(med.fechaF.split("-")[2])
    let monthF = parseInt(med.fechaF.split("-")[1]) - 1
    let yearF = parseInt(med.fechaF.split("-")[0])
    let dayV = parseInt(med.fechaV.split("-")[2])
    let monthV = parseInt(med.fechaV.split("-")[1]) - 1
    let yearV = parseInt(med.fechaV.split("-")[0])
    
    let fechaFabricacion = new Date(yearF, monthF, dayF)
    let fechaVencimiento = new Date(yearV, monthV, dayV)

    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(med.nombre),
      laboratorio: new FormControl(med.laboratorio),
      fechaF: new FormControl(fechaFabricacion),
      fechaV: new FormControl(fechaVencimiento),
      cantidad: new FormControl(med.cantidad),
      costo: new FormControl(med.costo),
    });
  }

  submit() {
    
    let dayF = new Date(this.form.controls['fechaF'].value).getDate()
    let monthF = new Date(this.form.controls['fechaF'].value).getMonth() + 1
    let yearF = new Date(this.form.controls['fechaF'].value).getFullYear()
    let dayV = new Date(this.form.controls['fechaV'].value).getDate()
    let monthV = new Date(this.form.controls['fechaV'].value).getMonth() + 1
    let yearV = new Date(this.form.controls['fechaV'].value).getFullYear()
    let dayFormat = dayF.toString();
    let monthFormat = monthF.toString();
    let dayFormat2 = dayV.toString();
    let monthFormat2 = monthV.toString();
    if (dayF.toString().length == 1){
      dayFormat = dayF.toString().padStart(2, "0");
    }
    if (monthF.toString().length == 1){
      monthFormat = monthF.toString().padStart(2, "0");
    }
    if (dayV.toString().length == 1){
      dayFormat2 = dayV.toString().padStart(2, "0");
    }
    if (monthV.toString().length == 1){
      monthFormat2 = monthV.toString().padStart(2, "0");
    }
    let fechaFormulario = dayFormat + "-" + monthFormat + "-" + yearF
    let fechaFormulario2 = dayFormat2 + "-" + monthFormat2 + "-" + yearV
    
    this.form.controls['fechaF'].setValue(fechaFormulario);
    this.form.controls['fechaV'].setValue(fechaFormulario2);
    this.form.controls['id'].setValue(this.id);
    
    this.backend.actualizarMed(this.form.value as Medicamento).subscribe({
      next: (med) => {
        if (med !== null) {
          this.form.reset();
          this.messageService.add({ severity: 'success', summary: 'Finalizado', detail: 'Se ha agregado un nuevo medicamento'});
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error'});
        }
      } 
    });
  }
}
