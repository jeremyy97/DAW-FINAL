import React from 'react';
import {getUsers} from './utils/api.js'
import App from './App.js'



class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            users: [],
            loading: true,
        }
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


    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value,
        })
      }

      verificar = () => {
    
       
        let resultado=false;
        
        this.state.users.forEach((e,i) => {
       
            if (e.usuario1 == this.state.username && e.contrasenna == this.state.password){
                resultado=true;
            }
        })

        resultado ? console.log('Ingreso correcto') : console.log('Ingreso incorrecto');

     

      
      }

      ingresar = {
        render(){
            return (<App/>);
        }
        
      }

    
      handleSubmit = (e) => {
          e.preventDefault();
         {/* console.log(this.state.username);
          console.log(this.state.password);
         console.log(this.state.users);*/}
        this.state.loading ? console.log('cargando') : this.verificar()

      }


    render(){
        
        document.body.classList.add("bg-gradient-primary");
        return(
        
                <div class="container">

                    <div class="row justify-content-center">

                        <div class="col-xl-5 col-lg-6 col-md-4">

                            <div class="card o-hidden border-0 shadow-lg my-5">
                                <div class="card-body p-0">

                                    <div class="row">

                                        <div class="col-lg-12">
                                            <div class="p-5">
                                                <div class="text-center">
                                                    <h1 class="h4 text-gray-900 mb-4">Ingresar</h1>
                                                </div>
                                                <form class="user" onSubmit={this.handleSubmit} >
                                                    <div class="form-group">
                                                        <input 
                                                        type="text" 
                                                        class="form-control form-control-user"
                                                        placeholder="Usuario" 
                                                        name="username"
                                                        value={this.state.username}
                                                        onChange={this.handleChange}/>
                                                    </div>
                                                    <div class="form-group">
                                                        <input 
                                                        type="password" 
                                                        class="form-control form-control-user" 
                                                        placeholder="Contraseña"
                                                        name="password"
                                                        value={this.state.password}
                                                        onChange={this.handleChange}/>
                                                    </div>

                                                    <button  class="btn btn-primary btn-user btn-block" >
                                                        Login 
                    </button>
                                                    <hr />

                                                </form>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

        


        );
    }




}

export default Login;