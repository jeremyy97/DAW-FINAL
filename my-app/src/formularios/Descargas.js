import React, {Component} from 'react';

import ListaDescargas from './ListaDescargas';

class Descargas extends Component{
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
        this.mostrarListaDescargas = this.mostrarListaDescargas.bind(this)
    }

    mostrarListaDescargas(){
        this.setState({
          contenido: <ListaDescargas></ListaDescargas>
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
                        <legend>Descargas</legend>
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
                                    </select>
                                </div>   
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="metodo">Tipo:</label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <select id="metodo" name="metodo" class="form-control">
                                    <option value="1">Pelicula</option>
                                    <option value="2">Libro</option>
                                    <option value="2">Musica</option>
                                    </select>
                                </div>   
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="metodo">Genero:</label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <select id="metodo" name="metodo" class="form-control">
                                    <option value="1">Comedia</option>
                                    <option value="2">Romance</option>
                                    <option value="2">Accion</option>
                                    </select>
                                </div>   
                            </td>
                            </tr>
                        </table>
                            <div class="form-group">
                            <a id="consultar" name="consultar" class="btn btn-primary" onClick={this.mostrarListaDescargas}>Consultar</a>
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

export default Descargas;