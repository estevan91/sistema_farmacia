import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button'
import { TableModule } from 'primeng/table'
import { DialogModule } from 'primeng/dialog'
import { ToastModule } from 'primeng/toast'
import { CalendarModule } from 'primeng/calendar'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { InputTextModule } from 'primeng/inputtext';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { VistaMedicamentoComponent } from './components/vista-medicamento/vista-medicamento.component';
import { AgregarMedicamentoComponent } from './components/agregar-medicamento/agregar-medicamento.component';
import { VentaMedicamentoComponent } from './components/ventas-medicamento/ventas-medicamento.component';
import { ActualizarMedicamentoComponent } from './components/actualizar-medicamento/actualizar-medicamento.component';

const routes: Routes = [
  { path: 'inicio', component: VistaMedicamentoComponent },
  { path: 'ventas', component: VentaMedicamentoComponent },
  { path: 'agregar', component: AgregarMedicamentoComponent },
  { path: 'actualizar/:id', component: ActualizarMedicamentoComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VistaMedicamentoComponent,
    VentaMedicamentoComponent,
    AgregarMedicamentoComponent,
    ActualizarMedicamentoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
