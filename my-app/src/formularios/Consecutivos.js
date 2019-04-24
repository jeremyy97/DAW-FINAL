import React, {Component} from 'react';
import { getConsecutivos } from '../utils/api';
import NuevoConsecutivo from './NuevoConsecutivo';
import EditarConsecutivo from './EditarConsecutivo';

class Consecutivos extends Component{
    constructor(){
        super();
        this.state={
            consecutivos: [],
            contenido : (<div></div>)
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
        this.mostrarNuevoConsecutivo = this.mostrarNuevoConsecutivo.bind(this)
        this.mostrarEditarConsecutivo = this.mostrarEditarConsecutivo.bind(this)
    }

    componentDidMount() {
        getConsecutivos()
          .then((res) => {
            this.setState({
              consecutivos: res.data,
              loading: false,
            });
          })
          .catch((err) => console.log(err));
      }

    controlarCambioInput(e){
        const {value,name} = e.target;
        console.log(name,value)
        this.setState({
            [name]: value
        })
    }

    controlarSubmit(e){
        e.preventDefault();
    }

    mostrarNuevoConsecutivo(e){
        {this.state.consecutivos.map((item,i)=>{
            this.setState({
                contenido: <NuevoConsecutivo 
                id = {item.id}
                ></NuevoConsecutivo>
            })
        })}
    }

    mostrarEditarConsecutivo(e){
        {this.state.consecutivos.map((item,i)=>{
            if(item.id == e.target.id){
                this.setState({
                    contenido: <EditarConsecutivo 
                    id = {item.id}
                    descripcion = {item.descripcion}
                    consecutivo = {item.consecutivo1}
                    prefijo = {item.prefijo}
                    rangoInicial = {item.rango_inicial}
                    rangoFinal = {item.rango_final}
                    ></EditarConsecutivo>
                })
            }
         })}
    }

    render(){
        return(
            <div class="container">
                <form class="card" onSubmit={this.controlarSubmit}>
                    <fieldset>
                    <legend>Lista de consecutivos</legend>
                    <table id="idTable" class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>Codigo</th>
                                <th>Descripcion</th>
                                <th>Consecutivo</th>
                                <th></th>
                            </tr>
                            {this.state.consecutivos.map((item,i)=>{return(
                            <tr>
                                <td key={i}>{item.id}</td>
                                <td key={i}>{item.descripcion}</td>
                                <td key={i}>{item.consecutivo1}</td>
                                <td><a id={item.id} onClick={this.mostrarEditarConsecutivo} href="#">Editar</a></td>
                            </tr>
                            ) })}
                            
                        </thead>
                    </table>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="nuevo"></label>
                        <div class="col-md-4">
                            <button id="nuevo" name="nuevo" class="btn btn-primary" onClick= {this.mostrarNuevoConsecutivo}>Nuevo</button>
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

export default Consecutivos;