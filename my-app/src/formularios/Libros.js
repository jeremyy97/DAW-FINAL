import React, {Component} from 'react';
import {getLibros} from '../utils/api.js'

import NuevoLibro from './NuevoLibro';
import EditarLibro from './EditarLibro';
import EliminarLibro from './EliminarLibro';

class Libros extends Component{
    constructor(){
        super();
        this.state={
            libros : [],
            contenido : (<div></div>)
        }
        this.mostrarNuevoLibro = this.mostrarNuevoLibro.bind(this);
        this.mostrarEditarLibro = this.mostrarEditarLibro.bind(this);
        this.mostrarEliminarLibro = this.mostrarEliminarLibro.bind(this);
    }

    componentDidMount() {
        getLibros()
          .then((res) => {
            this.setState({
              libros: res.data,
              loading: false,
            });
          })
          .catch((err) => console.log(err));
      }


    mostrarNuevoLibro(){
        this.setState({
          contenido: <NuevoLibro></NuevoLibro>
        })
    }

    mostrarEditarLibro(e){
        {this.state.libros.map((item,i)=>{
            if(item.id == e.target.id){
                this.setState({
                    contenido: <EditarLibro 
                    id={item.id}
                    nombre={item.nombre}
                    categoria = {item.categoria}
                    idioma = {item.idioma}
                    usuario={item.usuario}
                    actores = {item.actores}
                    editorial = {item.editorial}
                    year = {item.year}
                    url_descarga = {item.url_descarga}
                    url_previsualizacion = {item.url_previsualizacion}
                    ></EditarLibro>
                })
            }
         })}
    }

    mostrarEliminarLibro(e){
        {this.state.libros.map((item,i)=>{
            if(item.id == e.target.id){
                this.setState({
                    contenido: <EliminarLibro 
                    id= {item.id}
                    nombre= {item.nombre}
                   
                    ></EliminarLibro>
                })
            }
         })}
    }

    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <legend>Lista de libros</legend>
                        <table id="idTable" class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Codigo</th>
                                    <th>Nombre</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                    {this.state.libros.map((item,i)=>{return(
                                    <tr>
                                        <td key={i}>{item.id}</td>
                                        <td key={i}>{item.nombre}</td>
                                        <td><a id={item.id} onClick={this.mostrarEditarLibro}>Editar</a></td>
                                        <td><a id={item.id} onClick={this.mostrarEliminarLibro}>Eliminar</a></td>
                                    </tr>
                                    ) })}
                            </thead>
                        </table>
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="nuevo"></label>
                            <div class="col-md-4">
                                <a id="nuevo" name="nuevo" class="btn btn-primary" onClick={this.mostrarNuevoLibro}>Nuevo</a>
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

export default Libros;