import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMedicamentoComponent } from './vista-medicamento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BackendService } from 'src/app/services/backend.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterService } from 'primeng/api'

describe('VistaMedicamentoComponent', () => {
  let component: VistaMedicamentoComponent;
  let fixture: ComponentFixture<VistaMedicamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaMedicamentoComponent],
      imports: [HttpClientTestingModule],
      providers: [BackendService, FilterService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(VistaMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse', () => {
    expect(component).toBeTruthy();
  });
});
