import axios from 'axios';


//USUARIOS
export function getUsers() {
  return axios.get('http://localhost:62402/api/Usuarios');
}

export function postUsuario({ id, usuario1, contrasenna, nombre, primer_apellido, segundo_apellido, pregunta_seguridad, rol }) {
  return axios({
    method: 'post',
    url: 'http://localhost:62402/api/Usuarios',
    data: {
      id,
      usuario1,
      contrasenna,
      nombre,
      primer_apellido,
      segundo_apellido,
      pregunta_seguridad,
      rol
    }
  })
}

//PELICULAS

export function getPeliculas() {
  return axios.get('http://localhost:62402/api/Peliculas');
}


//MUSICA

export function getMusica() {
  return axios.get('http://localhost:62402/api/Musica');
}

//LIBROS

export function getLibros() {
  return axios.get('http://localhost:62402/api/Libros');
}