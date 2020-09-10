class Perfil {

    constructor() {
        this.Usuario = document.getElementById("Nombre")
        
    }
    Mostrar() {
        let Nombre ="<p>"+ this.Usuario +"</p>"
        document.getElementById("nombreUsuario").innerHTML=Nombre
    }
}
let perfil = new Perfil()