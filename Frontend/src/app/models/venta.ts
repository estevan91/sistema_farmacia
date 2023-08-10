export class Venta {

    public fechaVenta!: string;
    public horaVenta!: string;
    public medicamento!: string;
    public cantidad!: number;
    public valorUnitario!: number;
    public valorTotal!: number;
    public id?: number;

    constructor(
        fechaVenta: string,
        horaVenta: string,
        medicamento: string,
        cantidad: number,
        valorUnitario: number,
        valorTotal: number,
        id?: number
    ) {
        this.fechaVenta = fechaVenta;
        this.horaVenta = horaVenta;
        this.medicamento = medicamento;
        if (cantidad <= 0) {
            throw new Error("Cantidad erronea")
        }
        this.cantidad = cantidad;
        if (valorUnitario <= 0) {
            throw new Error("Valor incorrecto")
        }
        this.valorUnitario = valorUnitario;
        this.valorTotal = valorTotal;

        if (this.valorTotal != (this.valorUnitario * this.cantidad)) {
            throw new Error("Total erroneo");
        }
    }
}
