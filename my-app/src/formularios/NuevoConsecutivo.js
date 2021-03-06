import React, {Component} from 'react';

import { postConsecutivo } from '../utils/api';
import { hoyFecha } from '../utils/api';
import { postErrores } from '../utils/api';

class NuevoConsecutivo extends Component{
    constructor(props){
        super(props);
        this.state={
            id : this.props.id +1,
            descripcion: '',
            consecutivo1: '',
            prefijoCheck : true,
            prefijo: '',
            rangoCheck : true,
            rango_inicial: '',
            rango_final: '',
            usuario:'1',
            error: {
                id:'',
                fecha:'',
                descripcion:'',
                usuario:'1'
            }
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
        this.cambioDescripcion = this.cambioDescripcion.bind(this)
        this.activarPrefijo = this.activarPrefijo.bind(this)
        this.activarRango = this.activarRango.bind(this)
        this.enviarError = this.enviarError.bind(this)
    }

    
    enviarError(desc){
        var f = hoyFecha()
        var ids = Math.round(Math.random() * (1000 - 0) + 0)

        this.setState({
            error:{ ...this.state.error, id:ids, fecha: f, descripcion: desc}
        },()=>{
            console.log("Id",this.state.error.id)
            console.log("Fecha",this.state.error.fecha)
            console.log("Descr",this.state.error.descripcion)
            console.log("User",this.state.error.usuario)
            postErrores(this.state.error)
                      .then((res) => {
                          console.log(res);
                      })
                      .catch((err) => console.log(err)); 
        })
    }

    //CONTROLA LA ACTUALIZACION DE LOS INPUT
    controlarCambioInput(e){
        const {value,name} = e.target;

        this.setState({
            [name]: value
        })
    }

    //CONTROLA LA ACTUALIZACION DE LA DESCRIPCION
    cambioDescripcion(e){
        this.setState({descripcion: e.target.value});
    }

    
   //ENVIAR AL POST PARA CREAR LIBRO
   controlarSubmit(e){

 

    e.preventDefault();
    postConsecutivo(this.state)
        .then((res) => {
            console.log(res);
            alert("Consecutivo agregado")
            window.location="/menu";
        })
        .catch((err) => this.enviarError(err)); 
}

    activarPrefijo(e){
        this.setState({
            prefijoCheck : !this.state.prefijoCheck
        })
    }

    activarRango(e){
        this.setState({
            rangoCheck : !this.state.rangoCheck
        })
    }

    render(){
        return(
            <div class="container">
                <form class="form-horizontal">
                    <fieldset>
                        <hr class="sidebar-divider"/>
                        <legend>Crear nuevo Consecutivo</legend>
                        <label class="col-md-4 control-label" for="usuario"></label>  
                        <br></br>
                        <div>
                        <table align="center" >
                            <tr>
                            <td align="left">
                                <label class="" for="selectDescripcion">Descripción</label>
                            </td>
                            <td>
                                <div class="form-group">
                                <select  onChange={this.cambioDescripcion}  value={this.state.descripcion} class="form-control">
                                    <option value="">Seleccionar</option>
                                    <option value="Libro">Libro</option>
                                    <option value="Pelicula">Pelicula</option>
                                    <option value="Musica">Musica</option>
                                    <option value="Compra">Compra</option>
                                    <option value="Cuenta">Cuenta</option>
                                </select>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label class="" for="consecutivo">Consecutivo:</label>   
                            </td>
                            <td >
                                <div class="form-group">
                                <input id="consecutivo" onChange={this.controlarCambioInput} name="consecutivo1" value={this.state.consecutivo1} type="text" placeholder="" class="form-control input-md"/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="prefijoCheck">Posee prefijo:</label>  
                            </td>
                            <td align="left">
                                <div class="form-group">
                                <label class="checkbox-inline" for="prefijoCheck-0" >
                                    <input type="checkbox" name="prefijoCheck" onClick={this.activarPrefijo} value="1"/>
                                    Sí
                                </label>
                                </div> 
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="prefijo">Prefijo:</label>     
                            </td>
                            <td>
                                <div class="form-group">
                                    <input id="prefijo"  onChange={this.controlarCambioInput} name="prefijo" type="text"  value={this.state.prefijo} placeholder="" class="form-control input-md" disabled={this.state.prefijoCheck}/>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="rangoCheck">Posee Rango:</label>   
                            </td>
                            <td align="left">
                                <div class="form-group">
                                    <label class="checkbox-inline" for="rangoCheck-0">
                                    <input type="checkbox" name="rangoCheck" onClick={this.activarRango} id="rangoCheck-0" value="false"/>
                                    Sí
                                    </label>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class=""  for="rangoInicial">Rango Inicial:</label>  
                            </td>
                            <td> 
                                <div class="form-group">
                                    <input id="rangoInicial" onChange={this.controlarCambioInput} name="rango_inicial" type="text" value={this.state.rango_inicial} placeholder="" class="form-control input-md" disabled={this.state.rangoCheck}/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="rangoFinal">Rango Final:</label> 
                            </td>
                            <td> 
                                <div class="form-group">
                                    <input id="rangoFinal" onChange={this.controlarCambioInput}  name="rango_final" type="text" value={this.state.rango_final} placeholder="" class="form-control input-md" disabled={this.state.rangoCheck}/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                <div class="form-group">
                                <button id="aceptar" name="aceptar" class="btn btn-primary" onClick={this.controlarSubmit}>Crear Consecutivo</button>
                                <button id="cancelar" name="cancelar" class="btn btn-default">Cancelar</button>
                                </div>
                            </td>
                            </tr>
                        </table>
                        </div>
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

export default NuevoConsecutivo;