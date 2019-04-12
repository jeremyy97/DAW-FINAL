import React, {Component} from 'react';

class ListaConsultas extends Component{
    constructor(){
        super();
        this.state={
            
        }
    }

    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <hr class="sidebar-divider"/>
                        <legend>Resultado de Consulta</legend>
                        <table id="idTable" class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Codigo</th>
                                    <th>Fecha</th>
                                    <th>Descripcion</th>
                                    <th>Ver registro</th>
                                </tr>
                                <tr>
                                    <td>123</td>
                                    <td>31/12/97</td>
                                    <td>Se agrego una pelicula</td>
                                    <td>Ver registro</td>
                                </tr>
                               <tr>
                                    <td>456</td>
                                    <td>4/10/2019</td>
                                    <td>Se agrego musica nueva</td>
                                    <td>Ver registro</td>
                                </tr>
                                <tr>
                                    <td>789</td>
                                    <td>4/10/2019</td>
                                    <td>Se agrego un libro</td>
                                    <td>Ver registro</td>
                                </tr>
                            </thead>
                        </table>
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

export default ListaConsultas;