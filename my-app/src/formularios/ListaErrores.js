import React, {Component} from 'react';

class ListaErrores extends Component{
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
                        <legend>Resulta de la consulta</legend>
                        <table id="idTable" class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Fecha</th>
                                    <th># Error</th>
                                    <th>Mensaje</th>
                                </tr>
                                <tr>
                                    <td>31/12/97</td>
                                    <td>1</td>
                                    <td>Error al crear una pelicula</td>
                                </tr>
                               <tr>
                                    <td>4/12/2019</td>
                                    <td>2</td>
                                    <td>Error al descargar un libro</td>
                                </tr>
                                <tr>
                                    <td>4/12/2019</td>
                                    <td>3</td>
                                    <td>Error al descargar una pelicula</td>
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

export default ListaErrores;