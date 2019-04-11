import axios from 'axios';


//metodo get
export function getUsers() {
  return axios.get('http://localhost:62402/api/Usuarios');
}