import React, {Component} from 'react';

class ListaErrores extends Component{
    constructor(props){
        super(props);
        this.state={
            errores : this.props.errores
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
                                    <th># Error</th>
                                    <th>Fecha</th>
                                    <th>Mensaje</th>
                                </tr>
                                {this.state.errores.map((item,i)=>{return(
                                    <tr>
                                        <td key={i}>{item.id}</td>
                                        <td key={i}>{item.fecha}</td>
                                        <td key={i}>{item.descripcion}</td>
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

                
            </div>
        )
    }
}

export default ListaErrores;