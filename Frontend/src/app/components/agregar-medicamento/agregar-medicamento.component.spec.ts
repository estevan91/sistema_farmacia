import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMedicamentoComponent } from './agregar-medicamento.component';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AgregarMedicamentoComponent', () => {
  let component: AgregarMedicamentoComponent;
  let fixture: ComponentFixture<AgregarMedicamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarMedicamentoComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AgregarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
