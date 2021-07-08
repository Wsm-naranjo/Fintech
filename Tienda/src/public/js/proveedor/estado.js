class estado{
    constructor(){
        this.estado = document.getElementById('estado')
    }

    CambioLetras(){
        if (this.estado.value == 1){
            this.estado.value = "Activo"
        }else{
            this.estado.value = "No Disponible";
        }
    }
}

let estados = new estado()

window.onload = estados.CambioLetras()