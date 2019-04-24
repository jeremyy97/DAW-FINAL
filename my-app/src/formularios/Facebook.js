import React, {Component} from 'react'; 
import FacebookLogin from 'react-facebook-login';
import App from '../App.js';


export default class Facebook extends Component{
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture : ''
    }

    responseFacebook = response => {
       this.setState({
           isLoggedIn: true,
           userID : response.userID,
           name : response.name,
           email : response.email,
           picture : response.picture.data.url
       });

    };  

    verificar = () => {
    

        if(this.state.isLoggedIn){
            alert('Acceso Correcto');
           
            window.location="/menu";
            
        }else{
            alert('Credenciales incorrectos');
        }
      }

      
      ingresar = {
        render(){
            return (<App></App>);
        }
      }


    componentClicked = () => console.log("clicked"); 


    render(){
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
                <div style={{
                    width: '400px',
                    margin : 'auto',
                    background : '#f4f4f4', 
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name}></img>
                    <h2>Bienvenido {this.state.name}</h2>
                    <button class="btn btn-warning btn-user btn-block" onClick ={this.verificar}>Continuar con Facebook</button>
                </div>
            );
        }else{
            fbContent = (<FacebookLogin
                appId="1550685731734679"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}/>)
        }
        return(
            <div>
                {fbContent}
            </div>
        )
    }
}