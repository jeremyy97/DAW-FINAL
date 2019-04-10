import React, {Component} from 'react';

class VerUsuarios extends Component{
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
                                    <option value="1">user1</option>
                                    <option value="2">user2</option>
                                </select>
                                </div>
                            </div>
                            </td>
                            
                            <td style={{width: "50%"}}>
                            <div className="form-group" align="left">
                                <label class="" align="left" for="roles">Lista de roles</label>
                                <div class="" align="left">
                                <div className="checkbox">
                                <label for="roles-0">
                                    <input type="checkbox" name="roles" id="roles-0" value="1"/>
                                    Administrador
                                </label>
                                </div>
                                <div className="checkbox">
                                <label for="roles-1">
                                    <input type="checkbox" name="roles" id="roles-1" value="2"/>
                                    Seguridad
                                </label>
                                </div>
                                <div className="checkbox">
                                <label for="roles-2">
                                    <input type="checkbox" name="roles" id="roles-2" value="3"/>
                                    Mantenimiento
                                </label>
                                </div>
                                <div className="checkbox">
                                <label for="roles-3">
                                    <input type="checkbox" name="roles" id="roles-3" value="4"/>
                                    Consultas
                                </label>
                                </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="" for="actualizarRoles"></label>
                                <div class="col-md-4">
                                <button id="actualizarRoles" name="actualizarRoles" class="btn btn-primary">Actualizar Roles</button>
                                </div>
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