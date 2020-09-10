const empleadoController = {};
const pool = require('../database');
 
empleadoController.renderAgregarempleado =(req,res)=>{
res.render('registro_empleados');

}
empleadoController.Agregarempleado = async(req,res)=>{
    const {
        //todos los name de la vista hbs
        cedula_ue,
        nombre_ue,
        apellido_ue,
        direccion_ue,
        telf_ue,
        cel_ue,
        contraena_ue,
    } = req.body;
    const nuevoEmpleado ={
        // reescribir todos los name de hbs
        cedula_ue,
        nombre_ue,
        apellido_ue,
        direccion_ue,
        telf_ue,
        cel_ue,
        contraena_ue,
        usuario:req.user.id
    };await pool.query('INSERT INTO usuario_empleado set ?' , [nuevoEmpleado]) 
    req.flash('SE ha registrado un nuevo empleado con exito');
    res.redirect ('/empleados/Detalle');
}
//listar 
empleadoController.renderEmpleado=async (req,res) =>{
    const empleados = await pool.query('SELECT * FROM usuario_empleado WHERE usuario = ?',[req.user.id]);
    res.render ('detalle_empleados',{empleados})
}
//eliminar 
empleadoController.EliminarEmpleado=async (req,res) =>{
    const{id}=req.params;
    await pool.query('DELETE FROM usuario_empleado WHERE ID =?',[id]);
    req.flash('SE HA ELIMINADO CON EXITO AL EMPLEADO');
    res.redirect('/empleados/Detalle');
}
// editar 
empleadoController.renderEditarEmpleado=async (req,res) =>{
    const{id}=req.params;
    const editar =await pool.query('SELECT * FROM usuario_empleado WHERE id=?',[id]);
    res.render('editar_empleados',{edit:editar[0]});
}

empleadoController.editarEmpleado=async (req,res) =>{
    const{id}=req.params;
    const {// todos los name editar empleado hbd
        nombre_ue,
        apellido_ue,
        direccion_ue,
        telf_ue,
        cel_ue,
    } = req.body;
    const nuevoEmpleado ={
        // todos los name editar empleado hbd
        nombre_ue,
        apellido_ue,
        direccion_ue,
        telf_ue,
        cel_ue,
    };
    await pool.query('UPDATE usuario_empleado set ?',[nuevoEmpleado,id]);
    req.flash('DATOS DEL EMPLEADOS ACTUALIZADO CON EXITO');
    res.redirect('/empleados/Detalle');
}


module.exports = empleadoController;



