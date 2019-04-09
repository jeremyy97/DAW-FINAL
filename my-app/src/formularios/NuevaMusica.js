import React, {Component} from 'react';

class NuevaMusica extends Component{
    constructor(){
        super();
        this.state={
            usuario:'',
            contrasenna:'',
            contrasennaConfirmar    :'',
            email:'',
            preguntaSeguridad: '',
            respuestaSeguridad: ''
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
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
        this.props.onAddTareas(this.state)
        this.setState({
            usuario:'',
            contrasenna:'',
            contrasennaConfirmar    :'',
            email:'',
            preguntaSeguridad: '',
            respuestaSeguridad: ''
        }) 
    }

    render(){
        return(
            <div class="container">
                <form class="form-horizontal">
                    <fieldset>
                        <hr class="sidebar-divider"/>
                        <legend>Crear nueva Musica</legend>
                        <label class="col-md-4 control-label" for="usuario"></label>  
                        <br></br>
                        <div>
                        <table align="center" >
                            <tr>
                            <td align="left">
                                <label class="" for="codigo">Código:</label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="codigo" name="codigo" type="text" placeholder="" class="form-control input-md"/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label class="" for="nombre">Nombre:</label>  
                            </td>
                            <td >
                                <div class="form-group">
                                <input id="nombre" name="nombre" type="text" placeholder="" class="form-control input-md"></input>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="genero">Genero:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <select id="genero" name="genero" class="form-control">
                                    <option value="1">Rock</option>
                                    <option value="2">Grunge</option>
                                    </select>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="tipo">Tipo Interpretación:</label>     
                            </td>
                            <td>
                                <div class="form-group">
                                <select id="tipo" name="tipo" class="form-control">
                                <option value="1">No tengo</option>
                                <option value="2">idea</option>
                                </select>   
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="idioma">Idioma:</label>    
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="idioma" name="idioma" type="text" placeholder="" class="form-control input-md"></input>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="col-md-4 control-label" for="pais">País:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <select id="pais" name="pais" class="form-control">
                                    <option value="">Costa Rica</option>
                                </select> 
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="disquera">Disquera:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="disquera" name="disquera" type="text" placeholder="" class="form-control input-md"></input> 
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="l" for="textinput">Disco:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="textinput" name="textinput" type="text" placeholder="" class="form-control input-md"></input>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="anno">Año:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="anno" name="anno" type="text" placeholder="" class="form-control input-md"></input>  
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="descargaActual">Archivo descarga actual:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="descargaActual" name="descargaActual" type="text" placeholder="" class="form-control input-md"></input>  
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="previsualizacionActual">Archivo pre visualización actual</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="previsualizacionActual" name="previsualizacionActual" type="text" placeholder="" class="form-control input-md"></input>  
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                            <label class="" for="previsualización">Archivo pre visualización:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="previsualización" name="previsualización" class="input-file" type="file"></input>  
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                <div class="form-group">
                                <button id="aceptar" name="aceptar" class="btn btn-primary">Aceptar</button>
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

export default NuevaMusica;