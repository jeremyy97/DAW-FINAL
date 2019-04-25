import React, {Component} from 'react';
import { postLibro } from '../utils/api';

//CONSECUTIVO A ID
import { getConsecutivoById } from '../utils/api';
import { putConsecutivo } from '../utils/api';

class NuevoLibro extends Component{
    constructor(){
        super();
        this.state={
            libro:{
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
            },
            consecutivo: {
                id:'',
                descripcion:'',
                consecutivo1:'',
                prefijo:'',
                rango_inicial:'',
                rango_final:'',
                usuario:''
            }
            
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
        this.cambioCategoria = this.cambioCategoria.bind(this)
    }

     //CONTROLA LA ACTUALIZACION DE LOS INPUT
     controlarCambioInput(e){
        const {value,name} = e.target;

        this.setState({

            libro :{ ...this.state.libro,  [name]: value } 
        })
    }

    //CONTROLA LA ACTUALIZACION DEL SELECT GENERO
    cambioCategoria(e){
        this.setState({libro :{ ...this.state.libro, categoria: e.target.value } });
    }

    componentDidMount(){
        getConsecutivoById("3")
        .then((res) => {
          this.setState({
            consecutivo: res.data,
          });
          console.log("Consecutivo: ",this.state.consecutivo)
        }
        )
        .catch((err) => console.log(err));
    }


   //ENVIAR AL POST PARA CREAR LIBRO
   controlarSubmit(e){
    e.preventDefault();
    var contador = parseInt(this.state.consecutivo.consecutivo1) + 1
    var rangoF = this.state.consecutivo.rango_final
    console.log("Contador",contador,"Final",rangoF)

    if (contador < rangoF){
        var idC = this.state.consecutivo.prefijo.concat(contador)
        console.log("idC",idC)
        this.setState({
            libro: {... this.state.libro, id: idC},
            consecutivo: { ...this.state.consecutivo, consecutivo1: contador  } 
        },() => {
            
            
                  putConsecutivo(this.state.consecutivo)
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
              
               

                  postLibro(this.state.libro)
                  .then((res) => {
                      console.log(res);
                      alert("Libro agregada")
                      window.location="/menu";
                  })
                  .catch((err) => console.log(err)); 
        
                }

        )
      
       
    }else{
            alert("No hay consecutivos para asignar")
    }
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
                            {/** 
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
                            */}
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
                                  value={this.state.libro.nombre}
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
                                <select onChange={this.cambioCategoria} value={this.state.libro.categoria} class="form-control">
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
                                   value={this.state.libro.idioma}
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
                                    value={this.state.libro.actores}
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
                                    value={this.state.libro.editorial}
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
                                    value={this.state.libro.year}
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
                                    value={this.state.libro.url_descarga}
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
                                    value={this.state.libro.url_previsualizacion}
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

export default NuevoLibro;