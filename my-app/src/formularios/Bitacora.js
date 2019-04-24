import React, {Component} from 'react';
import ListaConsultas from './ListaConsultas';
import {getBitacora} from '../utils/api';

class Bitacora extends Component{
    constructor(){
        super();
        this.state={
            contenido : (<div></div>),
            usuario : '',
            tipo : '',
            bitacora : []
        }
        this.mostrarListaConsultas = this.mostrarListaConsultas.bind(this);
        this.controlarCambioInput = this.controlarCambioInput.bind(this);
    }

    componentDidMount() {
        getBitacora()
          .then((res) => {
            this.setState({
              bitacora: res.data,
              loading: false,
            });
          })
          .catch((err) => console.log(err));
      }

    controlarCambioInput(e){
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value)
        this.setState({
            usuario : value
        })
    }

    mostrarListaConsultas(e){
        e.preventDefault();
        console.log(this.state.bitacora)
        this.setState({
          contenido: <ListaConsultas 
          usuario={this.state.usuario}
          tipo = {this.state.tipo}
          bitacora = {this.state.bitacora}
          ></ListaConsultas>
        })
    }

    render(){
        return(
            <div class="container">
                <form class="">
                    <fieldset>
                        <legend>Bitacora</legend>
                    </fieldset>
                </form>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

                <script src="js/sb-admin-2.min.js"></script>

                <form class="card">
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
                            <input id="usuario" name="usuario" type="text" onChange={this.controlarCambioInput} placeholder="" class="form-control input-md"/>
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
                                <option value="3">Todas</option>
                                </select>
                            </div>      
                        </td>
                        </tr>
                        <tr>
                        <td colspan="2">
                            <div class="form-group">
                            <a id="consultar" name="consultar" class="btn btn-primary" onClick={this.mostrarListaConsultas}>Consultar</a>
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

export default Bitacora;