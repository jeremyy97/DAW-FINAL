import React, {Component} from 'react';
import { postUsuario } from '../utils/api';

class CrearUsuario extends Component{
    constructor(){
        super();
        this.state={
       
            contrasennaConfirmar    :'',
            email:'correo@correo.com',
            respuesta:'blablabla',


            id:'',
            usuario1: '',
            contrasenna: '',
            nombre:'',
            primer_apellido:'',
            segundo_apellido:'',
            pregunta_seguridad:'blablabla',
            rol:'1'

        }
        this.handleChange = this.handleChange.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value,
        })
      }

    controlarSubmit(e){
        e.preventDefault();

      
        console.log('ID: ' + this.state.id);
        console.log('Usuario: ' + this.state.usuario1);
        console.log('Contraseña: ' + this.state.contrasenna);
        console.log('Nombre: ' + this.state.nombre);
        console.log('PrimerApellido: ' + this.state.primer_apellidollido);
        console.log('SegundoApellido: ' + this.state.segundo_apellidodo);
        console.log('Pregunta: ' + this.state.pregunta_seguridadgunta);
        console.log('Rol: ' + this.state.rol);
        
        
        postUsuario(this.state)
            .then((res) => {
                console.log(res);
                window.location="/menu";
            })
            .catch((err) => console.log(err)); 
    }

    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <legend>Usuarios</legend>
                        <label class="col-md-4 control-label" for="usuario">Crear nueva cuenta </label>  
                        <br></br>
                        <div>
                        <table align="center" >
                        <tr>
                            <td align="left">
                                <label class="" for="usuario">ID: </label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <input  
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="id"
                                    onChange={this.handleChange}
                                    placeholder="ID"
                                    value={this.state.id}
                                />
                                </div>
                            </td>
                            </tr>
                        
                            <tr>
                            <td align="left">
                                <label class="" for="usuario">Usuario: </label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <input  
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="usuario1"
                                    onChange={this.handleChange}
                                    placeholder="Nombre"
                                    value={this.state.usuario1}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="usuario">Nombre: </label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <input  
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="nombre"
                                    onChange={this.handleChange}
                                    placeholder="Nombre"
                                    value={this.state.nombre}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="usuario">Primer Apellido: </label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <input  
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="primer_apellido"
                                    onChange={this.handleChange}
                                    placeholder="Primer Apellido"
                                    value={this.state.primer_apellido}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="usuario">Segundo Apellido: </label> 
                            </td>
                            <td>
                                <div class="form-group">
                                <input  
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="segundo_apellido"
                                    onChange={this.handleChange}
                                    placeholder="Segundo Apellido"
                                    value={this.state.segundo_apellido}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label class="" for="contrasenna">Contraseña: </label>  
                            </td>
                            <td >
                                <div class="form-group">
                                <input  
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="contrasenna"
                                    onChange={this.handleChange}
                                    placeholder="Contraseña"
                                    value={this.state.contrasenna}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="confirmarContrasenna">Confirmar Contraseña: </label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <input  
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="contrasennaConfirmar"
                                    onChange={this.handleChange}
                                    placeholder="Confirmar contraseña"
                                    value={this.state.contrasennaConfirmar}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="email">Email:</label>      
                            </td>
                            <td>
                                <div class="form-group">
                                <input  
                                    type="email" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="email"
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                    value={this.state.email}
                                />
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="preguntaSeguridad">Pregunta de Seguridad: </label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <input  
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="pregunta_seguridad"
                                    onChange={this.handleChange}
                                    placeholder="Confirmar contraseña"
                                    value={this.state.pregunta_seguridad}
                                />
                                </div>      
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <label class="" for="respuestaSeguridad">Respuesta de Seguridad: </label>
                            </td>
                            <td> 
                                <div class="form-group">
                                <input  
                                    type="text" 
                                    placeholder="" 
                                    class="form-control" 
                                    name="respuesta"
                                    onChange={this.handleChange}
                                    placeholder="Confirmar contraseña"
                                    value={this.state.respuesta}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                <div class="form-group">
                                <button id="crearUsuario" name="crearUsuario" class="btn btn-primary" onClick={this.controlarSubmit}>Crear Usuario</button>
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

export default CrearUsuario;