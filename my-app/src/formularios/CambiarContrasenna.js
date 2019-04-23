import React, {Component} from 'react';
import {getUsers} from '../utils/api.js';
import {getUsersById} from '../utils/api.js';
import {putUsuario} from '../utils/api.js';

class CambiarContrasenna extends Component{
    constructor(){
        super();
        this.state={
            users: [],
            loading: true,
            usuarioID:'',
            //Objeto que va a recibir toda la información del usuario seleccionado para enviarlo al PUT
            user : {
                contrasenna: '',
                id: '',
                nombre: '',
                pregunta_seguridad: '',
                primer_apellido: '',
                rol: '',
                segundo_apellido: '',
                usuario1: ''
            },
            contrasenna:'',
            confirmarcontrasenna:''
        }
        this.cargarUsuario = this.cargarUsuario.bind(this)
        this.cargarOpciones = this.cargarOpciones.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.controlarSubmit = this.controlarSubmit.bind(this)
        this.enviarCambiosBD = this.enviarCambiosBD.bind(this)
    }

    //LLAMAR AL GET DE USUARIOS APENAS INICIA EL COMPONENTE
    componentDidMount() {
        getUsers()
          .then((res) => {
            this.setState({
              users: res.data,
              loading: false,
            });
          })
          .catch((err) => console.log(err));
      }

    //DESPUES DE QUE RECIBE TODOS LOS USUARIOS LOS PARSEA COMO OPCIONES EN UN SELECT
      cargarOpciones = () => {
        const { users } = this.state;
        return users.map(user => {
          const { id, nombre, primer_apellido, segundo_apellido } = user;
          return (
            <option key={id} value={id}> {nombre} {primer_apellido} {segundo_apellido}</option>
          );
        });
      }

     //FUNCION PARA ACTUALIZAR EL ID DEL USUARIO QUE SE SELECCIONA EN EL SELECT
      cargarUsuario(e){
        this.setState({usuarioID: e.target.value});
    }

    //FUNCION PARA CAMBIAR EL VALOR DE CONTRASEÑA Y CONFIRMAR CONTRASEÑA
    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value,
        })

      }

    //FUNCION QUE SE LLAMA COMO CALLBACK DEL SETSTATE PARA ENVIAR LA NUEVA CONTRASEÑA A LA BD
    enviarCambiosBD(){
        putUsuario(this.state.user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        console.log("Despues del PUT: ",this.state.user)
        alert("Contraseña cambiada")
    }

    //FUNCION QUE SE LLAMA AL DAR CLICK AL BOTON DE CAMBIO CONTRASEÑA
    controlarSubmit(e){
        e.preventDefault();
        {/*Recibe el objeto completo del usuario seleccionado*/}
        getUsersById(this.state.usuarioID)
        .then((res) => {
          this.setState({
            user: res.data,
          });
        }
        )
        .catch((err) => console.log(err));

    {/*Se validan las contraseñas*/}
        if (this.state.contrasenna == this.state.confirmarcontrasenna){
                {/*Se cambia el valor de contraseña manteniendo todos los demas valores del objeto*/}
            this.setState({
                user: { ...this.state.user, contrasenna: this.state.contrasenna  } 
            },() => {this.enviarCambiosBD();}); {/*Importante llamar al PUT como callback porque el SetState Renderiza el objeto y ocupamos que lo envia apenas termina*/}
        }else{
            alert("Contraseñas no coinciden");
            this.setState({
                contrasenna:"",
                confirmarcontrasenna:""
            })
        }


    }

    render(){
        return(
            <div class="container">
                <form class="card">
                    <fieldset>
                        <legend>Seguridad</legend>
                        <label class="col-md-4 control-label" for="usuario">Cambiar Contraseña </label>  
                        <br></br>
                        <div>
                        <table align="center" >
                            <tr>
                            <td align="left">
                            <label class="" for="contrasenna">Seleccionar usuario:</label>  
                            </td>
                            <td>
                                <div class="form-group">
                                    {/*Agregar los métodos de cambio y asignar el valor al todo el select*/}
                                <select onChange={this.cargarUsuario} value={this.state.usuarioID}  class="form-control">
                                   
                                    <option key="0" selected value="0">Seleccione un usuario</option>
                                        {/*IF Ternario para que muestre las opciones hasta que se haya completado el GET*/}
                                     {this.state.loading ? 'loading...' : this.cargarOpciones()}
                                  
                                    </select>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left"> 
                                <label for="nuevaContrasenna">Nueva Contraseña:</label>  
                            </td>
                            <td >
                                <div class="form-group">
                                <input id="nuevaContrasenna" name="contrasenna" type="password" placeholder="" class="form-control input-md" required="" value={this.state.contrasenna} onChange={this.handleChange}/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td align="left">
                                <label class="" for="confirmarContrasenna">Confirmar Contraseña: </label>  
                            </td>
                            <td>
                                <div class="form-group">
                                <input id="confirmarContrasenna" name="confirmarcontrasenna" type="password" placeholder=" " class="form-control" required="" value={this.state.confirmarcontrasenna} onChange={this.handleChange}/>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                <div class="form-group">
                                <button id="cambiarContrasenna" name="cambiarContrasenna" class="btn btn-primary" onClick={this.controlarSubmit}>Cambiar Contrasenna</button>
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

export default CambiarContrasenna;