import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcom visitor"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thanks for the sub."
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.changeMessage()}>Sub</button>
            </div>
        )
    }
}

export default Message