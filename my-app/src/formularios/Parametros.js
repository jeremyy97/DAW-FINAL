import React, {Component} from 'react';
import {getParametros} from '../utils/api.js'
import {postParametro} from '../utils/api.js'
import {deleteParametro} from '../utils/api.js'

class Parametros extends Component{
    constructor(){
        super();
        this.state={
           
                preLib:'',
                almLib:'',
                prePel:'',
                almPel:'',
                preMus:'',
                almMus:'',
            
                primary:''
          
  
        }
        this.controlarCambioInput = this.controlarCambioInput.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
    }

    componentDidMount() {
        getParametros()
          .then((res) => {
            this.setState({
              preLib: res.data[0].preLib,
              almLib: res.data[0].almLib,
              prePel: res.data[0].prePel,
              almPel: res.data[0].almPel,
              preMus: res.data[0].preMus,
              almMus: res.data[0].almMus,
              primary: res.data[0].preLib
            });
          })
          .catch((err) => console.log(err));


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
        {/***
        deleteParametro(this.state.primary)
        .then((res) =>{
            console.log("PARAMETRO ELIMINADO")
        } )
        .catch((err) => console.log(err));

        postParametro(this.state.preLib,this.state.almLib,this.state.prePel,this.state.almPel,this.state.preMus,this.state.almMus)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        console.log("Despues del POST: ",this.state)  */}
        alert("Parametro Actualizado")
        window.location="/menu";
    }

    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <legend>General</legend>
                        <label class="col-md-4 control-label" for="usuario">Parametros</label>  
                        <br></br>
                        <div>
                        <table align="center" >
                            <tr>
                            <td align="left">
                                <label class="" for="preLib">Ruta almacenamiento pre visualización libros PDF:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="preLib" name="preLib" onChange={this.controlarCambioInput} value={this.state.preLib}type="text" placeholder="" class="form-control input-md"/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label class="" for="almLib">Ruta almacenamiento libros PDF:</label>   
                            </td>
                            <td >
                                <div class="form-group">
                                <input id="almLib" name="almLib" type="text" onChange={this.controlarCambioInput}  value={this.state.almLib} placeholder="" class="form-control input-md"/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="prePel">Ruta almacenamiento pre visualización películas:</label>   
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="prePel" name="prePel" type="text" onChange={this.controlarCambioInput} value={this.state.prePel} placeholder="" class="form-control input-md"></input>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="almPel">Ruta almacenamiento películas:</label>        
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="almPel" name="almPel" type="text" onChange={this.controlarCambioInput} value={this.state.almPel} placeholder="" class="form-control input-md"></input>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="preMus">Ruta almacenamieto pre visualización Música:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="preMus" name="preMus" type="text" onChange={this.controlarCambioInput} value={this.state.preMus} placeholder="" class="form-control input-md"></input>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="almMus">Ruta almacenamiento películas:</label> 
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="almMus" name="almMus" type="text" placeholder="" onChange={this.controlarCambioInput} value={this.state.almMus} class="form-control input-md"></input>  
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

export default Parametros;