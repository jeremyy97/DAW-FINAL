import React, {Component} from 'react';

import NuevoLibro from './NuevoLibro';

class Libros extends Component{
    constructor(){
        super();
        this.state={
            contenido : (<div></div>)
        }
        this.mostrarNuevoLibro = this.mostrarNuevoLibro.bind(this);
    }

    mostrarNuevoLibro(){
        this.setState({
          contenido: <NuevoLibro></NuevoLibro>
        })
    }

    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <legend>Lista de libros</legend>
                        <table id="idTable" class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Codigo</th>
                                    <th>Nombre</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                    <tr>
                                    <td>1</td>
                                    <td>C# Programming</td>
                                    <td>Editar</td>
                                    <td>Eliminar</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Harry Potter</td>
                                    <td>Editar</td>
                                    <td>Eliminar</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>SQL Server 2012</td>
                                    <td>Editar</td>
                                    <td>Eliminar</td>
                                </tr>
                            </thead>
                        </table>
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="nuevo"></label>
                            <div class="col-md-4">
                                <a id="nuevo" name="nuevo" class="btn btn-primary" onClick={this.mostrarNuevoLibro}>Nuevo</a>
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

export default Libros;