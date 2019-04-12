import React, {Component} from 'react';

import ListaConsultas from './ListaConsultas';

class Bitacora extends Component{
    constructor(){
        super();
        this.state={
            contenido : (<div></div>)
        }
        this.mostrarListaConsultas = this.mostrarListaConsultas.bind(this);
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
                                    <th>Usuario</th>
                                    <th>Fecha</th>
                                    <th>Registro</th>
                                    <th>Tipo</th>
                                    <th>Descripcion</th>
                                    <th>Detalle</th>
                                </tr>
                                <tr>
                                    <td>admin</td>
                                    <td>31/12/97</td>
                                    <td>1223456</td>
                                    <td>Agregar</td>
                                    <td>Insersion de nueva pelicula</td>
                                    <td>Codigo=Pel1|Nombre=Prueba|Genero=1|Año=1995|Idioma=Ingles|Actores=Prueb
                                        aActor;Pruebactor1|NomArchDescarga=pel1.zip|NomArchPreVisua=pel1pre.mpg
                                    </td>
                                </tr>
                               <tr>
                                    <td>admin</td>
                                    <td>31/12/97</td>
                                    <td>1223456</td>
                                    <td>Agregar</td>
                                    <td>Insersion de nueva pelicula</td>
                                    <td>Codigo=Pel1|Nombre=Prueba|Genero=1|Año=1995|Idioma=Ingles|Actores=Prueb
                                        aActor;Pruebactor1|NomArchDescarga=pel1.zip|NomArchPreVisua=pel1pre.mpg
                                    </td>
                                </tr>
                                <tr>
                                    <td>admin</td>
                                    <td>31/12/97</td>
                                    <td>1223456</td>
                                    <td>Agregar</td>
                                    <td>Insersion de nueva pelicula</td>
                                    <td>Codigo=Pel1|Nombre=Prueba|Genero=1|Año=1995|Idioma=Ingles|Actores=Prueb
                                        aActor;Pruebactor1|NomArchDescarga=pel1.zip|NomArchPreVisua=pel1pre.mpg
                                    </td>
                                </tr>
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