import React, {Component} from 'react';
import NuevaMusica from './NuevaMusica';

class Musica extends Component{
    constructor(){
        super();
        this.state={    
            contenido:(<div></div>)      
        }
        this.mostrarNuevaMusica = this.mostrarNuevaMusica.bind(this);
    }

    mostrarNuevaMusica(){
        this.setState({
            contenido: <NuevaMusica></NuevaMusica>
          })
    }
    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <legend>Lista de Música</legend>
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
                                        <td>Come as you are</td>
                                        <td>Editar</td>
                                        <td>Eliminar</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Heaven Besides you</td>
                                        <td>Editar</td>
                                        <td>Eliminar</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nutshell</td>
                                        <td>Editar</td>
                                        <td>Eliminar</td>
                                    </tr>
                                </thead>
                            </table>
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="nuevo"></label>
                                <div class="col-md-4">
                                    <a id="nuevo" name="nuevo" class="btn btn-primary" onClick= {this.mostrarNuevaMusica}>Craer Nueva Musica</a>
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

export default Musica;