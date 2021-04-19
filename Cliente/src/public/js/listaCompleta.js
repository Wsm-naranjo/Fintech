class listaCompletta{
    constructor(){
        this.lista = document.getElementById("cantidaes")
        this.precio = document.getElementById("precios")
        this.total = document.getElementById("total")
    }
    modificar(){
        if(listas.lista.value>=1){
        let a = Number(listas.lista.value) * Number(listas.precio.value)
        listas.total.value=a
        }
    }
}

let listas = new listaCompletta()