import React, {Component} from 'react';

class Content extends Component{
    render(){
        return(
            <div>
                {this.props.body}
            </div>
        );
    }
}

export default Content;