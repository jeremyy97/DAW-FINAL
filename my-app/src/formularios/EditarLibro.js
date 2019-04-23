import React, {Component} from 'react';
import { putLibro } from '../utils/api';

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
            actores: this.props.actores,
            editorial : this.props.editorial,
            url_descarga: this.props.url_descarga,
            url_previsualizacion: this.props.url_previsualizacion
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


    controlarSubmit(e){
        e.preventDefault();
        putLibro(this.state)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        console.log("Despues del PUT: ",this.state)
        alert("Libro Actualizado")
        window.location="/menu";
    }

    render(){
        return(
            <div class="container">
                <form class="form-horizontal">
                    <fieldset>
                        <hr class="sidebar-divider"/>
                        <legend>Crear nuevo Libro</legend>
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
                                <input 
                                  type="text" 
                                  placeholder="" 
                                  class="form-control" 
                                  name="id"
                                  onChange={this.controlarCambioInput}
                                  value={this.state.id}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label class="" for="nombre">Nombre:</label>  
                            </td>
                            <td >
                                <div class="form-group">
                                <input 
                                  type="text" 
                                  placeholder="" 
                                  class="form-control" 
                                  name="nombre"
                                  onChange={this.controlarCambioInput}
                                  value={this.state.nombre}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="categoria">Categoría:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <select onChange={this.cambioCategoria} value={this.state.categoria} class="form-control">
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
                                <input 
                                   type="text" 
                                   placeholder="" 
                                   class="form-control" 
                                   name="idioma"
                                   onChange={this.controlarCambioInput}
                                   value={this.state.idioma}
                                />
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="actores">Actores</label>    
                            </td>
                            <td>
                                <div class="form-group">
                                <textarea 
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="actores"
                                    onChange={this.controlarCambioInput}
                                    value={this.state.actores}
                                ></textarea>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="editorial">Editorial:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input 
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="editorial"
                                    onChange={this.controlarCambioInput}
                                    value={this.state.editorial}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="publicacion">Año de Publicación:</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input 
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="year"
                                    onChange={this.controlarCambioInput}
                                    value={this.state.year}
                                /> 
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
                                <label class="" for="previsualizacionActual">Archivo pre visualización actual</label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input 
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="url_previsualizacion"
                                    onChange={this.controlarCambioInput}
                                    value={this.state.url_previsualizacion}
                                />
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

export default EditarLibro;