import React, {Component} from 'react';
import {getUsers} from '../utils/api.js';
import ListaRoles from './ListaRoles.js';

class VerUsuarios extends Component{
    constructor(props){
        super(props);
        this.state={
   
            contenido : (<div>
                <br></br><br></br><br></br><br></br>
                <p>Click en alguno de los usuarios para mostrar su rol</p>
            </div>),
            users: [],
            loading: true,
            usuario : 0,
            rol : 0
        }
        this.cargarRol = this.cargarRol.bind(this);
        this.mostrarRol = this.mostrarRol.bind(this);
    }

    
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

      cargarOpciones = () => {
        const { users } = this.state;
    
        return users.map(user => {
          const { id, nombre, primer_apellido, segundo_apellido } = user;
    
          return (
            <option onClick={this.cargarRol} key={id} id={id}>{nombre} {primer_apellido} {segundo_apellido}</option>

          );
        });
      }

      cargarRol(e){
        const id = e.target.id;
        var roll = 0;
        this.setState({
          usuario: id,
        })
        this.state.users.map((item,i)=>{
            if(item.id == e.target.id){
                roll = item.rol;
                this.setState({
                    rol: roll,
                    contenido : (<div>
                        <br></br><br></br>
                        <p>Usuario seleccionado:</p>
                        <p><strong>{item.nombre} {item.primer_apellido} {item.segundo_apellido}</strong></p>
                        <div class="form-group">
                            <label class="" for="mostrarRoles"></label>
                            <div class="col-md-4" >
                                <button onClick= {this.mostrarRol} id="mostrarRoles" name="mostrarRoles" class="btn btn-primary">Mostrar Roles</button>
                            </div>
                        </div>
                    </div>)
                  })
            } 
        })
      }

    mostrarRol(e){
        e.preventDefault();
        this.setState({
            contenido : <ListaRoles rol={this.state.rol} usuario= {this.state.usuario}></ListaRoles>
        })
    }

    render(){
        return(
            <div class="container">
                <form class="card">
                <fieldset>
                        <legend>Lista de Usuarios</legend>

                        <table style={{width: "100%"}}>
                        <tr>
                            <td style={{width: "50%"}}>
                            <div class="form-group">
                                <label class="" for="usuarios"></label>
                                <div class="container">
                                <select id="usuarios" name="usuarios" class="form-control" multiple="multiple" style={{height: 250}}>
                                    {this.state.loading ? 'loading...' : this.cargarOpciones()}

                                </select>
                                </div>
                            </div>
                            </td>
                            
                            <td style={{width: "50%"}}>
                            <div className="form-group" align="left">
                                <label class="" align="left" for="roles">Lista de roles</label>
                                {this.state.contenido}
                            </div>
                            </td>
                        </tr>
                        </table>
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

export default VerUsuarios;