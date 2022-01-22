import React from 'react'

function Greet(props){
    return (
    <div>
        <h1>Heelo {props.name}</h1>
        {props.children}
    </div>
    )
}

export default Greet