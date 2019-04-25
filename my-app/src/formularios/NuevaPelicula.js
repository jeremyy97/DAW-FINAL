import React, {Component} from 'react';
import { postPelicula } from '../utils/api';

//CONSECUTIVO A ID
import { getConsecutivoById } from '../utils/api';
import { putConsecutivo } from '../utils/api';


class NuevaPelicula extends Component{
    constructor(){
        super();
        this.state={
            pelicula:{
                id:'',
                nombre:'',
                genero:'',
                year:'',
                idioma:'',
                usuario:'1',
                actores:'',
                url_descarga:'',
                url_previsualizacion:'',
            },
            
            consecutivo: {
                id:'',
                descripcion:'',
                consecutivo1:'',
                prefijo:'',
                rango_inicial:'',
                rango_final:'',
                usuario:''
            },

          
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
        this.cambioGenero = this.cambioGenero.bind(this)
       
       
    }

   

    //CONTROLA LA ACTUALIZACION DE LOS INPUT
    controlarCambioInput(e){
        const {value,name} = e.target;

        this.setState({

            pelicula :{ ...this.state.pelicula,  [name]: value } 
        })
    }

    //CONTROLA LA ACTUALIZACION DEL SELECT GENERO
    cambioGenero(e){
        this.setState({pelicula :{ ...this.state.pelicula, genero: e.target.value } });
       
    }

    componentDidMount(){
        getConsecutivoById("1")
        .then((res) => {
          this.setState({
            consecutivo: res.data,
          });
          console.log("Consecutivo: ",this.state.consecutivo)
        }
        )
        .catch((err) => console.log(err));
    }

  

    //ENVIAR AL POST PARA CREAR PELICULA
    controlarSubmit(e){
        e.preventDefault();
        
        var contador = parseInt(this.state.consecutivo.consecutivo1) + 1
        var rangoF = this.state.consecutivo.rango_final
        console.log("Contador",contador,"Final",rangoF)

        if (contador < rangoF){
            var idC = this.state.consecutivo.prefijo.concat(contador)
            console.log("idC",idC)
            this.setState({
                pelicula: {... this.state.pelicula, id: idC},
                consecutivo: { ...this.state.consecutivo, consecutivo1: contador  } 
            },() => {
                
                
                      putConsecutivo(this.state.consecutivo)
                        .then((res) => console.log(res))
                        .catch((err) => console.log(err));
                      console.log("Despues del PUT: ",this.state.consecutivo)
                      console.log("ID",this.state.pelicula.id)
                      console.log("nombre",this.state.pelicula.nombre)
                      console.log("genero",this.state.pelicula.genero)
                   

                      postPelicula(this.state.pelicula)
                      .then((res) => {
                          console.log(res);
                          alert("Pelicula agregada")
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
                        <legend>Crear nueva pelicula</legend>
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
                                    value={this.state.pelicula.nombre}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="genero">Genero:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <select  onChange={this.cambioGenero} value={this.state.pelicula.genero} class="form-control">
                                    <option value="1">Terror</option>
                                    <option value="2">Comedia</option>
                                    <option value="3">Acción</option>
                                    <option value="4">Drama</option>
                                    <option value="5">Suspenso</option>
                                    </select>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="anno">Año:</label>       
                            </td>
                            <td>
                                <div class="form-group">
                                <input 
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="year"
                                    onChange={this.controlarCambioInput}
                                    value={this.state.pelicula.year}
                                />
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
                                    value={this.state.pelicula.idioma}
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
                                    value={this.state.pelicula.actores}
                                ></textarea>  
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
                                    value={this.state.pelicula.url_descarga}
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
                                    value={this.state.pelicula.url_previsualizacion}
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

export default NuevaPelicula;