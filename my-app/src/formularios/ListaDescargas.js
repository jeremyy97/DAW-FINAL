import React, {Component} from 'react';

class ListaDercargas extends Component{
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
                                    <th>Nombre</th>
                                    <th>Cantidad de descargas</th>
                                </tr>
                                <tr>
                                    <td>Harry Potter</td>
                                    <td>350</td>
                                </tr>
                               <tr>
                                    <td>Star Wars The rise of Skywalker</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <td>Avengers End Game</td>
                                    <td>600</td>
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

export default ListaDercargas;