import React, {Component} from 'react';

import ListaErrores from './ListaErrores';

import {getErrores} from '../utils/api.js';

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
            contenido : (<div></div>),
            errores : []
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
        this.mostrarListaErrores = this.mostrarListaErrores.bind(this)
    }

    componentDidMount() {
        getErrores()
          .then((res) => {
            this.setState({
              errores: res.data,
              loading: false,
            });
          })
          .catch((err) => console.log(err));
      }

    mostrarListaErrores(){
        console.log(this.state.errores)
        this.setState({
          contenido: <ListaErrores errores={this.state.errores}></ListaErrores>
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
                                    <option value="1">Dia</option>
                                    <option value="2">Semana</option>
                                    <option value="3">Mes</option>
                                    <option value="4">Trimestre</option>
                                    <option value="5">Semestre</option>
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