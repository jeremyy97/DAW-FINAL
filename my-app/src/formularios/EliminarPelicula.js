

import React, {Component} from 'react';
import { deletePelicula } from '../utils/api';

class EliminarPelicula extends Component{
    constructor(props){
        super(props);
        this.state={
            id : this.props.id
        }
        this.eliminarSubmit = this.eliminarSubmit.bind(this);
        this.cancelarSubmit = this.cancelarSubmit.bind(this);
    }

    eliminarSubmit(e){
        e.preventDefault();
        deletePelicula(this.state.id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        
        alert("Película Eliminada")
        window.location="/menu";
    }

    cancelarSubmit(e){
        e.preventDefault();

        window.location="/menu";
    }

    render() {
        return (
            <div>
               
               <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Eliminar Pelicula</h5>
              
            </div>
            <div class="modal-body">¿Está seguro de eliminar la pelicula {this.props.nombre}?</div>
            <div class="modal-footer">
              <button class="btn btn-secondary" type="button" data-dismiss="modal" onClick={this.cancelarSubmit}>Cancelar</button>
              <a class="btn btn-primary" onClick={this.eliminarSubmit}>Eliminar</a>
            </div>
          </div>
        </div>
                <script src="./vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

                <script src="js/sb-admin-2.min.js"></script>
            </div>
        );
    }


}

export default EliminarPelicula;