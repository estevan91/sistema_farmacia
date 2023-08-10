import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Medicamento } from 'src/app/models/medicamento';
import { BackendService } from 'src/app/services/backend.service';

import { MessageService } from 'primeng/api'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-agregar-medicamento',
  templateUrl: './agregar-medicamento.component.html',
  styleUrls: ['./agregar-medicamento.component.scss'],
  providers: [MessageService]
})
export class AgregarMedicamentoComponent implements OnInit {
  form!: FormGroup;
  med!: Medicamento;
  msgButton!: string;
  oper!: number;
  titulo!: string;
  datePipe: DatePipe = new DatePipe("en-US");

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.titulo = "Agregar ";
    this.msgButton = "Agregar";
  }


  inicializarFormulario() {
    this.form = new FormGroup({
      nombre: new FormControl(""),
      laboratorio: new FormControl(""),
      fechaF: new FormControl(""),
      fechaV: new FormControl(""),
      cantidad: new FormControl(null),
      costo: new FormControl(null)
    })
  }

  submit(){
    
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
    
    this.backend.agregarMed(this.form.value as Medicamento).subscribe({
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
