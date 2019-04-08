import React, {Component} from 'react';

class CrearUsuario extends Component{
    constructor(){
        super();
        this.state={
            titulo:'',
            responsable:'',
            descripcion:'',
            prioridad:'baja'
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
    }

    controlarCambioInput(e){
        const {value,name} = e.target;
        console.log(name,value)
        this.setState({
            [name]: value
        })
    }

    controlarSubmit(e){
        e.preventDefault();
        this.props.onAddTareas(this.state)
        this.setState({
            titulo:'',
            responsable:'',
            descripcion:'',
            prioridad:'baja'
        }) 
    }

    render(){
        return(
            <div >
                <form class="form-horizontal">
                    <fieldset>
                        <legend>Usuarios</legend>
                        <label class="col-md-4 control-label" for="usuario">Crear nueva cuenta </label>  
                        <br></br>
                        <div class="form-group" >
                        <table>
                            <tr>
                            <td>
                                <label class="col-md-4 control-label" for="usuario">Usuario: </label> 
                            </td>
                            <td class="col-md-4">
                                <div class="col-md-4">
                                <input id="usuario" name="usuario" type="text" placeholder="" class="form-control input-md" required=""/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <label class="col-md-4 control-label" for="contrasenna">Contraseña: </label>  
                            </td>
                            <td class="col-md-4">
                                <div class="col-md-4">
                                <input id="contrasenna" name="contrasenna" type="text" placeholder="" class="form-control input-md" required=""/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <label class="col-md-4 control-label" for="confirmarContrasenna">Confirmar Contraseña: </label>  
                            </td>
                            <td class="col-md-4">
                                <div class="col-md-4">
                                <input id="confirmarContrasenna" name="confirmarContrasenna" type="text" placeholder=" " class="form-control input-md" required=""/>
                            </div>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <label class="col-md-4 control-label" for="email">Email:</label>      
                            </td>
                            <td class="col-md-4">
                                <div class="col-md-4">
                                <input id="email" name="email" type="text" placeholder="" class="form-control input-md" required=""/>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <label class="col-md-4 control-label" for="preguntaSeguridad">Pregunta de Seguridad: </label>  
                            </td>
                            <td class="col-md-4">
                                <div class="col-md-4">
                                <input id="preguntaSeguridad" name="preguntaSeguridad" type="text" placeholder="" class="form-control input-md" required=""/>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <label class="col-md-4 control-label" for="respuestaSeguridad">Respuesta de Seguridad: </label>
                            </td>
                            <td class="col-md-4"> 
                                <div class="col-md-4">
                                <input id="respuestaSeguridad" name="respuestaSeguridad" type="text" placeholder="" class="form-control input-md" required=""/>  
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                <div class="col-md-4">
                                <button id="crearUsuario" name="crearUsuario" class="btn btn-primary">Crear Usuario</button>
                                </div>
                            </td>
                            </tr>
                        </table>
                        </div>
                    </fieldset>
                </form>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

                <script src="js/sb-admin-2.min.js"></script>
            </div>
        )
    }
}

export default CrearUsuario;