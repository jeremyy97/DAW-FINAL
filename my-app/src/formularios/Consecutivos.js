import React, {Component} from 'react';

class Consecutivos extends Component{
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
                    <legend>Lista de consecutivos</legend>
                    <table id="idTable" class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>Codigo</th>
                                <th>Descripcion</th>
                                <th>Consecutivo</th>
                                <th></th>
                            </tr>
                             <tr>
                                <td>1</td>
                                <td>Tarifas</td>
                                <td>1</td>
                                <td>Editar</td>
                            </tr>
                                <tr>
                                <td>2</td>
                                <td>Productos y Servicios</td>
                                <td>2</td>
                                <td>Editar</td>
                            </tr>
                                <tr>
                                <td>3</td>
                                <td>Anuncios</td>
                                <td>5</td>
                                <td>Editar</td>
                            </tr>
                        </thead>
                    </table>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="nuevo"></label>
                        <div class="col-md-4">
                            <button id="nuevo" name="nuevo" class="btn btn-primary">Nuevo</button>
                        </div>
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

export default Consecutivos;