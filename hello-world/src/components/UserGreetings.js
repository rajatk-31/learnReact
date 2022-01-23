import React, { Component } from 'react';

class userGreetings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let message;
        if(this.state.isLoggedIn){
            message = <div>Hello Rk</div>
        }else{
            message = <div>Hello Guest</div>
        }
        return (
            <div>
                {message}

            </div>
        );
    }
}

export default userGreetings;
