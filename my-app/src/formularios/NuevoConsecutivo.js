import React, {Component} from 'react';
import { postLibro } from '../utils/api';

class NuevoConsecutivo extends Component{
    constructor(){
        super();
        this.state={
            id:'',
            nombre:'',
            categoria:'',
            usuario:'1',
            year:'',
            idioma:'',
            actores:'',
            editorial:'',
            url_descarga:'',
            url_previsualizacion:''
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
        this.cambioCategoria = this.cambioCategoria.bind(this)
    }

    //CONTROLA LA ACTUALIZACION DE LOS INPUT
    controlarCambioInput(e){
        const {value,name} = e.target;

        this.setState({
            [name]: value
        })
    }

    //CONTROLA LA ACTUALIZACION DEL SELECT GENERO
    cambioCategoria(e){
        this.setState({categoria: e.target.value});
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
                                <select id="selectbasic" name="selectbasic" class="form-control">
                                    <option value="1">Libros</option>
                                    <option value="2">Peliculas</option>
                                    <option value="3">Musica</option>
                                    <option value="4">Compras</option>
                                    <option value="5">Cuenta</option>
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
                                <input id="consecutivo" name="consecutivo" type="text" placeholder="" class="form-control input-md"/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="prefijoCheck">Posee prefijo:</label>  
                            </td>
                            <td align="left">
                                <div class="form-group">
                                <label class="checkbox-inline" for="prefijoCheck-0">
                                    <input type="checkbox" name="prefijoCheck" id="prefijoCheck-0" value="1"/>
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
                                    <input id="prefijo" name="prefijo" type="text" placeholder="" class="form-control input-md"/>
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
                                    <input type="checkbox" name="rangoCheck" id="rangoCheck-0" value="1"/>
                                    Sí
                                    </label>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="rangoInicial">Rango Inicial:</label>  
                            </td>
                            <td> 
                                <div class="form-group">
                                    <input id="rangoInicial" name="rangoInicial" type="text" placeholder="" class="form-control input-md"/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="rangoFinal">Rango Final:</label> 
                            </td>
                            <td> 
                                <div class="form-group">
                                    <input id="rangoFinal" name="rangoFinal" type="text" placeholder="" class="form-control input-md"/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="descargaActual">Archivo descarga actual:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input 
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="url_descarga"
                                    onChange={this.controlarCambioInput}
                                    value={this.state.url_descarga}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                <div class="form-group">
                                <button id="aceptar" name="aceptar" class="btn btn-primary" onClick={this.controlarSubmit}>Aceptar</button>
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