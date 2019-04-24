import React, {Component} from 'react';
import {getBitacora} from '../utils/api';

class ListaConsultas extends Component{
    constructor(props){
        super(props);
        this.state={
            bitacora : this.props.bitacora,
            usuario : this.props.usuario,
            tipo : this.props.tipo,
            mostrarBitacora : []
        }
    }

    componentDidMount() {
        this.state.bitacora.map((item,i)=>{
            if(item.usuario == this.state.usuario){
                this.setState({
                    mostrarBitacora : [...this.state.mostrarBitacora,item]
                })
            }
         })
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
                                {this.state.bitacora.map((item,i)=>{return(
                                    <tr>
                                        <td key={i}>{item.id}</td>
                                        <td key={i}>{item.usuario}</td>
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

export default ListaConsultas;