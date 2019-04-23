import axios from 'axios';


//USUARIOS
export function getUsers() {
  return axios.get('http://localhost:62402/api/Usuarios');
}

export function getUsersById(id) {
  return axios.get('http://localhost:62402/api/Usuarios/'+id);
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

export function putUsuario({ id, usuario1, contrasenna, nombre, primer_apellido, segundo_apellido, pregunta_seguridad, rol }) {
  return axios({
    method: 'put',
    url: 'http://localhost:62402/api/Usuarios/'+id,
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

export function postPelicula({ id, nombre, genero, year, idioma, usuario, actores, url_descarga, url_previsualizacion }) {
  return axios({
    method: 'post',
    url: 'http://localhost:62402/api/Peliculas',
    data: {
      id,
      nombre,
      genero,
      year,
      idioma,
      usuario,
      actores,
      url_descarga,
      url_previsualizacion
    }
  })
}

export function putPelicula({ id, nombre, genero, year, idioma, usuario, actores, url_descarga, url_previsualizacion }) {
  return axios({
    method: 'put',
    url: 'http://localhost:62402/api/Peliculas/'+id,
    data: {
      id,
      nombre,
      genero,
      year,
      idioma,
      usuario,
      actores,
      url_descarga,
      url_previsualizacion
    }
  })
}

export function deletePelicula(id) {
  return axios.delete('http://localhost:62402/api/Peliculas/'+id);
}

//MUSICA

export function getMusica() {
  return axios.get('http://localhost:62402/api/Musica');
}

export function postMusica({ id, nombre, usuario, genero,tipo_interpretacion,idioma,pais,disquera,disco,year,url_descarga,url_previsualizacion}) {
  return axios({
    method: 'post',
    url: 'http://localhost:62402/api/Musica',
    data: {
      id,
      nombre,
      usuario,
      genero,
      tipo_interpretacion,
      idioma,
      pais,
      disquera,
      disco,
      year,
      url_descarga,
      url_previsualizacion
    }
  })
}

export function putMusica({ id, nombre, usuario, genero,tipo_interpretacion,idioma,pais,disquera,disco,year,url_descarga,url_previsualizacion}) {
  return axios({
    method: 'put',
    url: 'http://localhost:62402/api/Musica/'+id,
    data: {
      id,
      nombre,
      usuario,
      genero,
      tipo_interpretacion,
      idioma,
      pais,
      disquera,
      disco,
      year,
      url_descarga,
      url_previsualizacion
    }
  })
}

export function deleteMusica(id) {
  return axios.delete('http://localhost:62402/api/Musica/'+id);
}

//LIBROS

export function getLibros() {
  return axios.get('http://localhost:62402/api/Libros');
}

export function postLibro({ id, nombre, categoria,usuario,year,idioma,actores,editorial,url_descarga,url_previsualizacion}) {
  return axios({
    method: 'post',
    url: 'http://localhost:62402/api/Libros',
    data: {
      id,
      nombre,
      categoria,
      usuario,
      year,
      idioma,
      actores,
      editorial,
      url_descarga,
      url_previsualizacion
    }
  })
}

export function putLibro({ id, nombre, categoria,usuario,year,idioma,actores,editorial,url_descarga,url_previsualizacion}) {
  return axios({
    method: 'put',
    url: 'http://localhost:62402/api/Libros/'+id,
    data: {
      id,
      nombre,
      categoria,
      usuario,
      year,
      idioma,
      actores,
      editorial,
      url_descarga,
      url_previsualizacion
    }
  })
}

export function deleteLibro(id) {
  return axios.delete('http://localhost:62402/api/Libros/'+id);
}