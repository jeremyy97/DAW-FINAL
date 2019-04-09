import React, {Component} from 'react';

class CambiarContrasenna extends Component{
    constructor(){
        super();
        this.state={
            usuario:'',
            contrasenna:'',
            contrasennaConfirmar    :'',
            email:'',
            preguntaSeguridad: '',
            respuestaSeguridad: ''
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
            usuario:'',
            contrasenna:'',
            contrasennaConfirmar    :'',
            email:'',
            preguntaSeguridad: '',
            respuestaSeguridad: ''
        }) 
    }

    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <legend>Seguridad</legend>
                        <label class="col-md-4 control-label" for="usuario">Cambiar Contraseña </label>  
                        <br></br>
                        <div>
                        <table align="center" >
                            <tr>
                            <td align="left">
                            <label class="" for="contrasenna">Contraseña actual:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="contrasenna" name="contrasenna" type="text" placeholder="" class="form-control input-md" required=""/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label for="nuevaContrasenna">Nueva Contraseña:</label>  
                            </td>
                            <td >
                                <div class="form-group">
                                <input id="nuevaContrasenna" name="nuevaContrasenna" type="text" placeholder="" class="form-control input-md" required=""/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="confirmarContrasenna">Confirmar Contraseña: </label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="confirmarContrasenna" name="confirmarContrasenna" type="text" placeholder=" " class="form-control" required=""/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                <div class="form-group">
                                <button id="cambiarContrasenna" name="cambiarContrasenna" class="btn btn-primary">CambiarContrasenna</button>
                                <button id="cancelar" name="cancelar" class="btn btn-default">Cancelar</button>
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

export default CambiarContrasenna;