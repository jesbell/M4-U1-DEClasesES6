class Impuestos{
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    //get y set montoBrutoAnual
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(nuevo_montoBrutoAnual){
        this._montoBrutoAnual = nuevo_montoBrutoAnual;
    }

    //get y set deducciones
    get deducciones(){
        return this._deducciones;
    }

    set deducciones(nuevo_deducciones){
        this._deducciones = nuevo_deducciones;
    }
}

export default Impuestos;