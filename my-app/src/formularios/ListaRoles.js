import React, {Component} from 'react';
import {getUsers} from '../utils/api.js'


class ListaRoles extends Component{
    constructor(props){
        super(props);
        this.state={
            rol : this.props.rol,
            usuario : this.props.usuario,
            admin: '',
            seguridad : '',
            mantenimiento : '',
            consultas : ''
        }
        this.cambiarRol = this.cambiarRol.bind(this);
        this.test = this.test.bind(this);
    }

    
    componentDidMount() {
        if(this.state.rol == 1){
            this.setState({
                admin: 'checked'
            });
        } else if(this.state.rol == 2){
            this.setState({
                seguridad: 'checked'
            });
        } else if(this.state.rol == 3){
            this.setState({
                mantenimiento: 'checked'
            });
        } else{
            this.setState({
                consultas: 'checked'
            });
        }
      }

      test(e){
        e.preventDefault();
        console.log(this.state.usuario)
        console.log(this.state.rol)
      }

      cambiarRol(e){
        const name= e.target.name;
        const value = e.target.value;
        this.setState({
            admin:'',
            seguridad:'',
            mantenimiento:'',
            consultas:'',
            [name]: 'checked',
            rol : value
        })
    }

    render(){
        return(
            <div class="" align="left">                                                                
            <div class="form-group">
            <div class="col-md-4">
            <div class="radio">
                <label for="radios-0">
                <input onClick= {this.cambiarRol} type="radio"  name="admin" id="radios-0" value="1" checked={this.state.admin}/>
                Administrador
                </label>
                </div>
            <div class="radio">
                <label for="radios-1">
                <input onClick= {this.cambiarRol} type="radio" name="seguridad" id="radios-1" value="2" checked={this.state.seguridad}/>
                Seguridad
                </label>
                </div>
            <div class="radio">
                <label for="radios-2">
                <input onClick= {this.cambiarRol} type="radio" name="mantenimiento" id="radios-2" value="3" checked={this.state.mantenimiento}/>
                Mantenimiento
                </label>
                </div>
            <div class="radio">
                <label for="radios-3">
                <input onClick= {this.cambiarRol} type="radio" name="consultas" id="radios-3" value="4" checked={this.state.consultas}/>
                Consultas
                </label>
                </div>
            </div>
            </div>
            <div class="form-group">
                <label class="" for="actualizarRoles"></label>
                <div class="col-md-4">
                    <button onClick= {this.test} id="actualizarRoles" name="actualizarRoles" class="btn btn-primary">Actualizar Roles</button>
                </div>
            </div>
        </div> 
        )
    }
}

export default ListaRoles;
                                