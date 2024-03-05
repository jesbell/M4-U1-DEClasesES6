class Cliente{
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    //Get y set nombre
    get nombre(){
        return this._nombre;
    }

    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

    //Calcular impuesto
    calcularImpuesto(){
        const brutoAnual = this._impuesto.montoBrutoAnual;
        const deducciones = this._impuesto.deducciones;
        return (brutoAnual - deducciones) * 0.21;
    }
}

export default Cliente;