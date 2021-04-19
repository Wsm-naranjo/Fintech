class lista {
    constructor(){
        this.lista = document.getElementById("lista")
        this.carrito =  document.getElementById("carrito")
        this.carrito1 = document.getElementById("carrito1")
    }
    inicio(){
        this.lista.style.display="none"
        this.carrito1.style.display ="none"
        this.carrito.style.display = "block"
    }
    aparecerLista(){
        this.lista.style.display="block"
        this.carrito.style.display="none"
        this.carrito1.style.display="block"
    }
    esconderLista(){
        this.lista.style.display="none"
        this.carrito1.style.display="none"
        this.carrito.style.display="block"
    }
}

let a = new lista

window.onload=a.inicio()