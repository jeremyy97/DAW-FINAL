import React, {Component} from 'react';

import ListaConsultas from './ListaConsultas';

class Consultas extends Component{
    constructor(){
        super();
        this.state={
            usuario:'',
            contrasenna:'',
            contrasennaConfirmar    :'',
            email:'',
            preguntaSeguridad: '',
            respuestaSeguridad: '',
            contenido : (<div></div>)
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
        this.mostrarNuevaPelicula = this.mostrarNuevaPelicula.bind(this)
    }

    mostrarNuevaPelicula(){
        this.setState({
          contenido: <ListaConsultas></ListaConsultas>
        })
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
                <form class="form-horizontal">
                    <fieldset>
                        <hr class="sidebar-divider"/>
                        <legend>Consultar acciones</legend>
                        <label class="col-md-4 control-label" for="usuario"></label>  
                        <br></br>
                        <div>
                        <table align="center" >
                            <tr>
                            <td align="left">
                                <label class="" for="usuario">Usuario:</label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="usuario" name="usuario" type="text" placeholder="" class="form-control input-md"/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label class="" for="fechaInicio">Fecha inicio:</label>  
                            </td>
                            <td >
                                <div class="form-group">
                                <input id="fechaInicio" name="fechaInicio" type="text" placeholder="" class="form-control input-md"></input>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="fechaFinal">Fecha Final:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="fechaFinal" name="fechaFinal" type="text" placeholder="" class="form-control input-md"></input>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="tipo">Tipo:</label>       
                            </td>
                            <td>
                                <div class="form-group">
                                <select id="tipo" name="tipo" class="form-control">
                                    <option value="1">Agregar</option>
                                    <option value="2">Eliminar</option>
                                    <option value="2">Todas</option>
                                    </select>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                <div class="form-group">
                                <a id="consultar" name="consultar" class="btn btn-primary" onClick={this.mostrarNuevaPelicula}>Consultar</a>
                                </div>
                            </td>
                            </tr>
                        </table>
                        </div>
                    </fieldset>
                    <div>
                        {this.state.contenido}
                    </div>
                </form>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

                <script src="js/sb-admin-2.min.js"></script>
            </div>
        )
    }
}

export default Consultas;