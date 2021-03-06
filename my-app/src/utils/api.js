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

//CONSECUTIVOS

export function getConsecutivos() {
  return axios.get('http://localhost:62402/api/Consecutivo');
}

export function getConsecutivoById(id) {
  return axios.get('http://localhost:62402/api/Consecutivo/'+id);
}

export function postConsecutivo({id,descripcion,consecutivo1,prefijo,rango_inicial,rango_final,usuario}) {
  return axios({
    method: 'post',
    url: 'http://localhost:62402/api/Consecutivo',
    data: {
      id,
      descripcion,
      consecutivo1,
      prefijo,
      rango_inicial,
      rango_final,
      usuario
    }
  })
}

export function putConsecutivo({id,descripcion,consecutivo1,prefijo,rango_inicial,rango_final,usuario}) {
  return axios({
    method: 'put',
    url: 'http://localhost:62402/api/Consecutivo/'+id,
    data: {
      id,
      descripcion,
      consecutivo1,
      prefijo,
      rango_inicial,
      rango_final,
      usuario
    }
  })
}

//BICATORA
export function getBitacora() {
  return axios.get('http://localhost:62402/api/Bitacora');
}

export function postBitacora({id,producto,fecha,descripcion}) {
  return axios({
    method: 'post',
    url: 'http://localhost:62402/api/Consecutivo',
    data: {
      id,
      producto,
      fecha,
      descripcion
    }
  })
}

//ERRORES

export function getErrores() {
  return axios.get('http://localhost:62402/api/Errores');
}

export function postErrores({id,fecha,descripcion,usuario}) {
  return axios({
    method: 'post',
    url: 'http://localhost:62402/api/Errores',
    data: {
      id,
      fecha,
      descripcion,
      usuario
    }
  })
}

//PARAMETROS

export function getParametros() {
  return axios.get('http://localhost:62402/api/Parametro');
}

export function postParametro({preLib,almLib,prePel,almPel,preMus, almMus}) {
  return axios({
    method: 'post',
    url: 'http://localhost:62402/api/Parametro',
    data: {
      preLib,
      almLib,
      prePel,
      almPel,
      preMus,
      almMus
    }
  })
}

export function deleteParametro(preLib) {
  return axios.delete('http://localhost:62402/api/Parametro/'+preLib);
}

//FECHA


function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}



export function hoyFecha(){
  var hoy = new Date();
      var dd = hoy.getDate();
      var mm = hoy.getMonth()+1;
      var yyyy = hoy.getFullYear();
      
      dd = addZero(dd);
      mm = addZero(mm);

      return yyyy+'-'+mm+'-'+dd;
}