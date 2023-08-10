export class Medicamento {

    constructor(
        public nombre: string,
        public laboratorio: string,
        public fechaF: string,
        public fechaV: string,
        public cantidad: number,
        public costo: number,
        public id?: number
    ) {
        let fechaFab = this.fechaF.split("/", 2).reverse().join("/").concat("/", fechaF.split("/")[2]);
        let fechaVen = this.fechaV.split("/", 2).reverse().join("/").concat("/", fechaV.split("/")[2]);
        
        
        if ((new Date().valueOf() - new Date(fechaFab).valueOf()) < 0) {
            throw new Error("La fecha de fabricación es incorrecta");
        }
        this.fechaF = fechaF;

        if ((new Date(fechaVen).valueOf() - new Date().valueOf()) < 0) {
            throw new Error("La fecha de vencimiento es incorrecta");
        }
        this.fechaV = fechaV;

        this.cantidad = cantidad;

        this.costo = costo;
        if (id !== null)
            this.id = id;

    }
}
