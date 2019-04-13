import React, {Component} from 'react';

import ListaErrores from './ListaErrores';

class Errores extends Component{
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
        this.mostrarListaErrores = this.mostrarListaErrores.bind(this)
    }

    mostrarListaErrores(){
        this.setState({
          contenido: <ListaErrores></ListaErrores>
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
                        <legend>Errores</legend>
                        <label class="col-md-4 control-label" for="usuario"></label>  
                        <br></br>
                        <div>
                        <table align="center" >
                            <tr>
                            <td align="left">
                                <label class="" for="fecha">Fecha:</label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <select id="fecha" name="fecha" class="form-control">
                                    <option value="1">Diaria</option>
                                    <option value="2">Semanal</option>
                                    <option value="3">Mensual</option>
                                    <option value="4">Trimestral</option>
                                    <option value="5">Semestral</option>
                                    <option value="5">Todos</option>
                                    </select>
                                </div>   
                            </td>
                            </tr>
                        </table>
                            <div class="form-group">
                            <a id="consultar" name="consultar" class="btn btn-primary" onClick={this.mostrarListaErrores}>Consultar</a>
                            </div>
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

export default Errores;