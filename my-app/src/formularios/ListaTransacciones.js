import React, {Component} from 'react';

class ListaTransacciones extends Component{
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
                                    <th>Compra</th>
                                    <th>Fecha</th>
                                    <th>Monto</th>
                                </tr>
                                <tr>
                                    <td>123</td>
                                    <td>31/12/97</td>
                                    <td>45000</td>
                                </tr>
                               <tr>
                                    <td>456</td>
                                    <td>4/10/2019</td>
                                    <td>80000</td>
                                </tr>
                                <tr>
                                    <td>789</td>
                                    <td>4/10/2019</td>
                                    <td>120000</td>
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

export default ListaTransacciones;