import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaMedicamentoComponent } from './venta-medicamento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('VentaMedicamentoComponent', () => {
  let component: VentaMedicamentoComponent;
  let fixture: ComponentFixture<VentaMedicamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaMedicamentoComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(VentaMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
