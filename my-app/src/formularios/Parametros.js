import React, {Component} from 'react';

class Parametros extends Component{
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
                <form class="card">
                    <fieldset>
                        <legend>General</legend>
                        <label class="col-md-4 control-label" for="usuario">Parametros</label>  
                        <br></br>
                        <div>
                        <table align="center" >
                            <tr>
                            <td align="left">
                                <label class="" for="rutaPrePdf">Ruta almacenamiento pre visualización libros PDF:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="rutaPrePdf" name="rutaPrePdf" type="text" placeholder="" class="form-control input-md"/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label class="" for="rutaPDF">Ruta almacenamiento libros PDF:</label>   
                            </td>
                            <td >
                                <div class="form-group">
                                <input id="rutaPDF" name="rutaPDF" type="text" placeholder="" class="form-control input-md"/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="rutaPrePel">Ruta almacenamiento pre visualización películas:</label>   
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="rutaPrePel" name="rutaPrePel" type="text" placeholder="" class="form-control input-md"></input>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="rutaPel">Ruta almacenamiento películas:</label>        
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="rutaPel" name="rutaPel" type="text" placeholder="" class="form-control input-md"></input>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="rutaPreMus">Ruta almacenamieto pre visualización Música:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="rutaPreMus" name="rutaPreMus" type="text" placeholder="" class="form-control input-md"></input>
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="rutaMus">Ruta almacenamiento películas:</label> 
                            </td>
                            <td> 
                                <div class="form-group">
                                <input id="rutaMus" name="rutaMus" type="text" placeholder="" class="form-control input-md"></input>  
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

export default Parametros;