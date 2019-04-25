import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CrearUsuario from './formularios/CrearUsuario';
import CambiarContrasenna from './formularios/CambiarContrasenna';
import Consecutivos from './formularios/Consecutivos';
import Parametros from './formularios/Parametros';
import Peliculas from './formularios/Peliculas';
import Libros from './formularios/Libros';
import Musica from './formularios/Musica';
import VerUsuarios from './formularios/VerUsuarios';
import Bitacora from './formularios/Bitacora';
import Transacciones from './formularios/Transacciones';
import Descargas from './formularios/Descargas';
import Errores from './formularios/Errores';

class App extends Component {
  constructor(props){
  super(props);

    this.state = {
      contenido : (<div></div>),
      usuarioActivo : ''
    }
    this.mostrarCrearUsuario = this.mostrarCrearUsuario.bind(this);
    this.mostrarCambiarContrasenna = this.mostrarCambiarContrasenna.bind(this);
    this.mostrarConsecutivos = this.mostrarConsecutivos.bind(this);
    this.mostrarParametros = this.mostrarParametros.bind(this);
    this.mostrarPeliculas = this.mostrarPeliculas.bind(this);
    this.mostrarLibros = this.mostrarLibros.bind(this);
    this.mostrarMusica = this.mostrarMusica.bind(this);
    this.mostrarVerUsuarios = this.mostrarVerUsuarios.bind(this);
    this.mostrarBitacora = this.mostrarBitacora.bind(this);
    this.mostrarTransacciones = this.mostrarTransacciones.bind(this);
    this.mostrarDescargas = this.mostrarDescargas.bind(this);
    this.mostrarErrores = this.mostrarErrores.bind(this);
  }


  mostrarCrearUsuario(){
    this.setState({
      contenido: <CrearUsuario></CrearUsuario>
    })
  }

  mostrarCambiarContrasenna(){
    this.setState({
      contenido: <CambiarContrasenna></CambiarContrasenna>
    })
  }

  mostrarConsecutivos(){
    this.setState({
      contenido: <Consecutivos></Consecutivos>
    })
  }

  mostrarParametros(){
    this.setState({
      contenido: <Parametros></Parametros>
    })
  }

  mostrarPeliculas(){
    this.setState({
      contenido: <Peliculas></Peliculas>
    })
  }

  mostrarLibros(){
    this.setState({
      contenido: <Libros></Libros>
    })
  }

  mostrarMusica(){
    this.setState({
      contenido: <Musica></Musica>
    })
  }

  mostrarVerUsuarios(){
    this.setState({
      contenido: <VerUsuarios></VerUsuarios>
    })
  }

  mostrarBitacora(){
    this.setState({
      contenido: <Bitacora></Bitacora>
    })
  }

  mostrarTransacciones(){
    this.setState({
      contenido: <Transacciones></Transacciones>
    })
  }

  mostrarDescargas(){
    this.setState({
      contenido: <Descargas></Descargas>
    })
  }

  mostrarErrores(){
    this.setState({
      contenido: <Errores></Errores>
    })
  }

  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="http://localhost:3000/menu">
              <div class="sidebar-brand-icon rotate-n-15">
                <i ><img src="logo.png" width="50px;"/></i>
              </div>
              <div class="sidebar-brand-text mx-3">Inicio</div>
            </a>

            <hr class="sidebar-divider my-0"/>

            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/menu">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Inicio</span></a>
            </li>

            <hr class="sidebar-divider"/>

            <div class="sidebar-heading">
              Seguridad
            </div>

            <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Usuarios</span>
              </a>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                
                  <a class="collapse-item" onClick={this.mostrarCrearUsuario}>Crear Usuarios</a>
                  <a class="collapse-item" onClick={this.mostrarVerUsuarios}>Asignar Roles</a>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-wrench"></i>
                <span onClick={this.mostrarCambiarContrasenna}>Cambiar Contraseña</span>
              </a>
              
            </li>

            <hr class="sidebar-divider"/>

            <div class="sidebar-heading">
              Administración
            </div>

            <li class="nav-item ">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGeneral" aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-folder"></i>
                <span>General</span>
              </a>
              <div id="collapseGeneral" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
              
                  <a class="collapse-item" onClick={this.mostrarConsecutivos}>Consecutivos</a>
                  <a class="collapse-item" onClick={this.mostrarParametros}>Parámetros</a>
                
                  <div class="collapse-divider"></div>
              
                </div>
              </div>
              
            </li>

            <li class="nav-item ">
              <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>Artículos</span>
              </a>
              <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <h6 class="collapse-header">Lista Artículos:</h6>
                  <a class="collapse-item" onClick={this.mostrarPeliculas}>Películas</a>
                  <a class="collapse-item" onClick={this.mostrarLibros}>Libros</a>
                  <a class="collapse-item" onClick={this.mostrarMusica}>Música</a>
                  <div class="collapse-divider"></div>
              
                </div>
              </div>
            </li>


            <hr class="sidebar-divider"/>

            <div class="sidebar-heading">
              Consultas
            </div>


            <li class="nav-item ">
              <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapseConsulta" aria-expanded="true" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>Consultas</span>
              </a>
              <div id="collapseConsulta" class="collapse " aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                
                  <a class="collapse-item" onClick={this.mostrarBitacora}>Bitácora</a>
                  <a class="collapse-item" onClick={this.mostrarTransacciones}>Transacciones</a>
                  <a class="collapse-item" onClick={this.mostrarDescargas}>Descargas</a>
                  <a class="collapse-item" onClick={this.mostrarErrores}>Errores</a>
                  <div class="collapse-divider"></div>
              
                </div>
              </div>
            </li>

          </ul>

        <div id="content-wrapper" class="d-flex flex-column">

          <div id="content">

            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

              <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
              </button>

              
              <ul class="navbar-nav ml-auto">

                

                <div class="topbar-divider d-none d-sm-block"></div>

                <li class="nav-item dropdown no-arrow">
                  <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">{this.state.usuarioActivo}</span>
                    <img class="img-profile rounded-circle" src="silueta.gif"/>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>

              </ul>

            </nav>

            <div class="container-fluid">

              
          
          {/*<!--PEGAR AQUI CODIGO DE FORMS-->*/}
          
          <div>
           
            {this.state.contenido}

          </div>
 
          
          {/*<img src=".\logofondoblancotrans.png" width="750px" style="padding: 70px;"/>*/}
          
            </div>

          </div>
          
          <footer class="sticky-footer bg-white">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright &copy; E-Descargas 2019</span>
              </div>
            </div>
          </footer>

        </div>

        </div>

        <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
        </a>

        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Cerrar Sesión</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">¿Está seguro que desea salir del sistema?</div>
            <div class="modal-footer">
              <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
              <a class="btn btn-primary" href="login.html">Cerrar Sesión</a>
            </div>
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

export default App;
