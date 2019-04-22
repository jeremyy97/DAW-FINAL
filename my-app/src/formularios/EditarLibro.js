import React, {Component} from 'react';

class EditarLibro extends Component{
    constructor(props){
        super(props);
        this.state={
            id: this.props.id,
            nombre : this.props.nombre,
            categoria:  this.props.categoria,
            year: this.props.year,
            idioma: this.props.idioma,
            usuario: this.props.usuario,
            autores: this.props.autores,
            editorial : this.props.editorial,
            url_descarga: this.props.url_descarga,
            url_previsualizacion: this.url_previsualizacion
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
                        <legend>Editar Libro</legend>
                        <label class="col-md-4 control-label" for="usuario"></label>  
                        <br></br>
                        <div>
                        <table align="center" >
                            <tr>
                            <td align="left">
                                <label class="" for="id">Código:</label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="id" name="id" value={this.state.id} type="text" placeholder="" class="form-control input-md" disabled/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label class="" for="nombre">Nombre:</label>  
                            </td>
                            <td >
                                <div class="form-group">
                                <input id="nombre" onChange={this.controlarCambioInput} name="nombre" value={this.state.nombre} type="text" placeholder="" class="form-control input-md"></input>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="categoria">Categoría:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <select id="categoria" onChange={this.controlarCambioInput} name="categoria" value={this.state.categoria}  class="form-control">
                                    <option value="1">Terror</option>
                                    <option value="2">Fantasia</option>
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
                                <input id="idioma" name="idioma" type="text"  onChange={this.controlarCambioInput}  value={this.state.idioma} placeholder="" class="form-control input-md"></input>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="autores">Autores</label>    
                            </td>
                            <td>
                                <div class="form-group">
                                <textarea class="form-control" id="autores" name="autores" onChange={this.controlarCambioInput}  value={this.state.autores}></textarea>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="editorial">Editorial:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="editorial" name="editorial" type="text"  onChange={this.controlarCambioInput} value={this.state.editorial} placeholder="" class="form-control input-md"></input> 
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="publicacion">Año de Publicación:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="publicacion" name="publicacion" type="text"  onChange={this.controlarCambioInput}  value={this.state.year} placeholder="" class="form-control input-md"></input> 
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="descarga">Archivo descarga:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="descarga" name="descarga" class="input-file"  type="file"></input>  
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                            <label class="" for="previsualización">Archivo pre visualización:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="previsualización" name="previsualización" class="input-file" type="file" 
                                ></input>  
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

export default EditarLibro;