import React, {Component} from 'react';

class EditarMusica extends Component{
    constructor(props){
        super(props);
        this.state={
            id: this.props.id,
            nombre: this.props.nombre,
            usuario: this.props.usuario,
            genero: this.props.genero,
            tipo_interpretacion: this.props.tipo_interpretacion,
            idioma: this.props.idioma,
            pais: this.props.pais,
            disquera: this.props.disquera,
            disco: this.props.disco,
            year: this.props.year,
            url_descarga: this.props.url_descarga,
            url_previsualizacion: this.props.url_previsualizacion
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
                        <legend>Editar Musica</legend>
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
                                <input id="codigo" name="codigo" type="text" value={this.state.id} placeholder="" class="form-control input-md" disabled/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label class="" for="nombre">Nombre:</label>  
                            </td>
                            <td >
                                <div class="form-group">
                                <input id="nombre" name="nombre" type="text" onChange={this.controlarCambioInput} value={this.state.nombre} placeholder="" class="form-control input-md"></input>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="genero">Genero:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <select id="genero" name="genero"  onChange={this.controlarCambioInput} value={this.state.genero} class="form-control">
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
                                <select id="tipo" name="tipo" onChange={this.controlarCambioInput} value={this.state.tipo_interpretacion} class="form-control">
                                <option value="1">Grupal</option>
                                <option value="2">Solo</option>
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
                                <input id="idioma" name="idioma" type="text" onChange={this.controlarCambioInput} value={this.state.idioma} placeholder="" class="form-control input-md"></input>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class=""  for="pais">País:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <select id="pais" name="pais"  onChange={this.controlarCambioInput} value={this.state.pais} class="form-control">
                                    <option value="1">USA</option>
                                    <option value="2">Costa Rica</option>
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
                                <input id="disquera" name="disquera" type="text"   onChange={this.controlarCambioInput} value={this.state.disquera} placeholder="" class="form-control input-md"></input> 
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="l" for="disco">Disco:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="disco" name="disco" type="text"  onChange={this.controlarCambioInput}  value={this.state.disco} placeholder="" class="form-control input-md"></input>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="anno">Año:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="anno" name="anno" type="text"  onChange={this.controlarCambioInput} value={this.state.year} placeholder="" class="form-control input-md"></input>  
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="descarga">Archivo descarga:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="descarga" name="descarga" class="input-file" type="file"></input>  
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

export default EditarMusica;