import React, {Component} from 'react';
import {getBitacora} from '../utils/api';
import ListaConsultas from './ListaConsultas';

class Bitacora extends Component{
    constructor(){
        super();
        this.state={
            bitacora : [],
            contenido : (<div></div>)
        }
        this.mostrarListaConsultas = this.mostrarListaConsultas.bind(this);
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

    mostrarListaConsultas(){
        this.setState({
          contenido: <ListaConsultas></ListaConsultas>
        })
    }

    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <legend>Bitacora</legend>
                        <table id="idTable" class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Usuario</th>
                                    <th>Fecha</th>
                                    <th>Detalle</th>
                                    <th>Producto</th>
                                </tr>
                                {this.state.bitacora.map((item,i)=>{return(
                                    <tr>
                                        <td key={i}>{item.id}</td>
                                        <td key={i}>{item.usuario}</td>
                                        <td key={i}>{item.fecha}</td>
                                        <td key={i}>{item.descripcion}</td>
                                        <td key={i}>{item.producto}</td>
                                    </tr>
                                ) })}
                            </thead>
                        </table>
                    </fieldset>
                </form>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

                <script src="js/sb-admin-2.min.js"></script>

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