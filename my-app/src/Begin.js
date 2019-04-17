import React, {Component} from 'react';
import Content from './Content'

class Begin extends Component{
    render(){
        return(

            <Content body={this.props.children}/>
        );
    }

}

export default Begin;