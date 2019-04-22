import React, {Component} from 'react';
import {getPeliculas} from '/Users/Jerem/Desktop/DiseñoWeb - Proyecto/DAW-FINAL/my-app/src/utils/api.js'

import NuevaPelicula from './NuevaPelicula';
import EditarPelicula from './EditarPelicula';

class Peliculas extends Component{
    constructor(){
        super();
        this.state={
            peliculas: [],
            contenido : (<div></div>)
        }
        this.mostrarNuevaPelicula = this.mostrarNuevaPelicula.bind(this);
        this.mostrarEditarPelicula = this.mostrarEditarPelicula.bind(this);
        
    }

    componentDidMount() {
        getPeliculas()
          .then((res) => {
            this.setState({
              peliculas: res.data,
              loading: false,
            });
          })
          .catch((err) => console.log(err));
      }

      
    mostrarEditarPelicula(e){
        {this.state.peliculas.map((item,i)=>{
            if(item.id == e.target.id){
                this.setState({
                    contenido: <EditarPelicula 
                    id= {item.id}
                    nombre= {item.nombre}
                    genero= {item.genero}
                    year= {item.year}
                    idioma= {item.idioma}
                    usuario= {item.usuario}
                    actores= {item.actores}
                    url_descarga= {item.url_descarga}
                    url_previsualizacion= {item.url_previsualizacion}
                    ></EditarPelicula>
                })
            }
         })}
    }

    mostrarNuevaPelicula(){
        this.setState({
          contenido: <NuevaPelicula></NuevaPelicula>
        })
    }

    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <legend>Lista de Películas</legend>
                        <table id="idTable" class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Codigo</th>
                                    <th>Nombre</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                {this.state.peliculas.map((item,i)=>{return(
                                    <tr>
                                        <td key={i}>{item.id}</td>
                                        <td key={i}>{item.nombre}</td>
                                        <td><a id={item.id} onClick={this.mostrarEditarPelicula} href="#">Editar</a></td>
                                        <td><a href="#">Eliminar</a></td>
                                    </tr>
                                ) })}
                            </thead>
                        </table>
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="nuevo"></label>
                            <div class="col-md-4">
                                <a id="nuevo" name="nuevo" class="btn btn-primary" onClick={this.mostrarNuevaPelicula}>Crear nueva pelicula</a>
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

export default Peliculas;