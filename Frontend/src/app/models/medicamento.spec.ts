import { Medicamento } from './medicamento';

describe('medicamento', () => {
  it('should instantiate', () => {
    let fechaV = "31/10/2023";
    let medicamento = "Loratadina"
    let laboratorio = "JGB";
    let fechaF = "10/04/2020";
    let stock = 1;
    let valorUnd = 1000;
    expect(new Medicamento(
      medicamento,
      laboratorio,
      fechaF,
      fechaV,
      stock,
      valorUnd
    )).toBeTruthy();
  });
  it('Debería decir fecha incorrecta', () => {
    let fechaV = "31/10/2023";
    let medicamento = "Loratadina"
    let laboratorio = "JGB";
    let fechaF = "10/04/2020";
    let stock = 1;
    let valorUnd = 1000;

    expect(() => {
      let a = new Medicamento(medicamento, laboratorio, fechaF, fechaV, stock, valorUnd)
    }).toThrow(new Error("Fecha de fabricación incorrecta"));

  });
  it('Debería decir fecha incorrecta', () => {
    let fechaV = "31/10/2023";
    let medicamento = "Loratadina"
    let laboratorio = "JGB";
    let fechaF = "10/04/2020";
    let stock = 1;
    let valorUnd = 1000;

    expect(() => {
      let a = new Medicamento(medicamento, laboratorio, fechaF, fechaV, stock, valorUnd)
    }).toThrow(new Error("fecha incorrecta"));

  });
  it('Debería decir sin stock', () => {
    let fechaV = "31/10/2023";
    let medicamento = "Loratadina"
    let laboratorio = "JGB";
    let fechaF = "10/04/2020";
    let stock = 1;
    let valorUnd = 1000;

    expect(() => {
      let a = new Medicamento(medicamento, laboratorio, fechaF, fechaV, stock, valorUnd)
    }).toThrow(new Error("Sin stock"));

  });
});
