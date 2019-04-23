import React, {Component} from 'react';
import {getMusica} from '../utils/api.js'

import NuevaMusica from './NuevaMusica';
import EditarMusica from './EditarMusica';
import EliminarMusica from './EliminarMusica';

class Musica extends Component{
    constructor(){
        super();
        this.state={    
            canciones : [],
            contenido:(<div></div>)      
        }
        this.mostrarNuevaMusica = this.mostrarNuevaMusica.bind(this);
        this.mostrarEditarMusica = this.mostrarEditarMusica.bind(this);
        this.mostrarEliminarMusica = this.mostrarEliminarMusica.bind(this);
        
    }

    componentDidMount() {
        getMusica()
          .then((res) => {
            this.setState({
              canciones: res.data,
              loading: false,
            });
          })
          .catch((err) => console.log(err));
      }

      
    mostrarEditarMusica(e){
        {this.state.canciones.map((item,i)=>{
            if(item.id == e.target.id){
                this.setState({
                    contenido: <EditarMusica 
                    id={item.id}
                    nombre={item.nombre}
                    usuario = {item.usuario}
                    genero = {item.genero}
                    tipo_interpretacion = {item.tipo_interpretacion}
                    idioma = {item.idioma}
                    pais = {item.pais}
                    disquera = {item.disquera}
                    disco = {item.disco}
                    year = {item.year}
                    url_descarga = {item.url_descarga}
                    url_previsualizacion = {item.url_previsualizacion}
                    ></EditarMusica>
                })
            }
         })}
    }

    mostrarEliminarMusica(e){
        {this.state.canciones.map((item,i)=>{
            if(item.id == e.target.id){
                this.setState({
                    contenido: <EliminarMusica 
                    id= {item.id}
                    nombre= {item.nombre}
                   
                    ></EliminarMusica>
                })
            }
         })}
    }

    mostrarNuevaMusica(){
        this.setState({
            contenido: <NuevaMusica></NuevaMusica>
          })
    }
    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <legend>Lista de Música</legend>
                            <table id="idTable" class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Codigo</th>
                                        <th>Nombre</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    {this.state.canciones.map((item,i)=>{return(
                                    <tr>
                                        <td key={i}>{item.id}</td>
                                        <td key={i}>{item.nombre}</td>
                                        <td><a id={item.id} onClick={this.mostrarEditarMusica} href="#">Editar</a></td>
                                        <td><a id={item.id} onClick={this.mostrarEliminarMusica} >Eliminar</a></td>
                                    </tr>
                                    ) })}
                                </thead>
                            </table>
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="nuevo"></label>
                                <div class="col-md-4">
                                    <a id="nuevo" name="nuevo" class="btn btn-primary" onClick= {this.mostrarNuevaMusica}>Craer Nueva Musica</a>
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

export default Musica;