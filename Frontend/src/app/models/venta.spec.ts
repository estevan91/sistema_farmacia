import { Venta } from './venta';

describe('Venta', () => {
  it('should instantiate', () => {
    let fechaV = "31/10/2023";
    let horaVenta = "21:25:10";
    let medicamento = "Loratadina"
    let cantidad = 1;
    let valorUnitario = 1000;
    let valorTotal = 1000;
    expect(new Venta(
      fechaV,
      horaVenta,
      medicamento,
      cantidad,
      valorUnitario,
      valorTotal
    )).toBeTruthy();
  });
  it('Debería decir cantidad incorrecta', () => {
    let fechaV = "31/10/2023";
    let horaVenta = "21:25:10";
    let medicamento = "Loratadina"
    let cantidad = 1;
    let valorUnitario = 1000;
    let valorTotal = 1000;

    const funcion = () => {
      new Venta(
        fechaV,
        horaVenta,
        medicamento,
        cantidad,
        valorUnitario,
        valorTotal
      )
    }

    expect(funcion).toThrow(new Error("Cantidad mal"));
  });
  it('Debería decir valor total erroneo', () => {
    let fechaV = "31/10/2023";
    let horaVenta = "21:25:10";
    let medicamento = "Loratadina"
    let cantidad = 1;
    let valorUnitario = 1000;
    let valorTotal = 1000;

    const funcion = () => {
      new Venta(
        fechaV,
        horaVenta,
        medicamento,
        cantidad,
        valorUnitario,
        valorTotal
      )
    }

    expect(funcion).toThrow(new Error("Total erroneo"));
  });

});
