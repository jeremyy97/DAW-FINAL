import React, {Component} from 'react';

import { postLibro } from '../utils/api';

class EditarConsecutivo extends Component{
    constructor(props){
        super(props);
        this.state={
            id : this.props.id,
            descripcion: this.props.descripcion,
            consecutivo: this.props.consecutivo,
            prefijoCheck : true,
            prefijo: this.props.prefijo,
            rangoCheck : true,
            rangoInicial: this.props.rangoInicial,
            rangoFinal: this.props.rangoFinal
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
        this.cambioDescripcion = this.cambioDescripcion.bind(this)
        this.activarPrefijo = this.activarPrefijo.bind(this)
        this.activarRango = this.activarRango.bind(this)
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

    postLibro(this.state)
        .then((res) => {
            console.log(res);
            alert("Libro agregado")
            window.location="/menu";
        })
        .catch((err) => console.log(err)); 
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
                        <legend>Editar Consecutivo</legend>
                        <label class="col-md-4 control-label" for="usuario"></label>  
                        <br></br>
                        <div>
                        <table align="center" >
                        <tr>
                            <td align="left"> 
                                <label class="" for="id">ID:</label>   
                            </td>
                            <td >
                                <div class="form-group">
                                <input id="id" onChange={this.controlarCambioInput} name="id" value={this.state.id} type="text" placeholder="" class="form-control input-md" disabled/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="selectDescripcion">Descripción</label>
                            </td>
                            <td>
                                <div class="form-group">
                                <select id="selectbasic" onChange={this.cambioDescripcion} name="selectbasic" value={this.state.descripcion} class="form-control">
                                    <option value="Libros">Libros</option>
                                    <option value="Peliculas">Peliculas</option>
                                    <option value="Musica">Musica</option>
                                    <option value="Compras">Compras</option>
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
                                <input id="consecutivo" onChange={this.controlarCambioInput} name="consecutivo" value={this.state.consecutivo} type="text" placeholder="" class="form-control input-md"/>
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
                                <label class="" onChange={this.controlarCambioInput} for="rangoInicial">Rango Inicial:</label>  
                            </td>
                            <td> 
                                <div class="form-group">
                                    <input id="rangoInicial" name="rangoInicial" type="text" value={this.state.rangoInicial} placeholder="" class="form-control input-md" disabled={this.state.rangoCheck}/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="rangoFinal">Rango Final:</label> 
                            </td>
                            <td> 
                                <div class="form-group">
                                    <input id="rangoFinal" onChange={this.controlarCambioInput}  name="rangoFinal" type="text" value={this.state.rangoFinal} placeholder="" class="form-control input-md" disabled={this.state.rangoCheck}/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                <div class="form-group">
                                <button id="aceptar" name="aceptar" class="btn btn-primary" onClick={this.controlarSubmit}>Actualizar Consecutivo</button>
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

export default EditarConsecutivo;