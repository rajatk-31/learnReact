import React from 'react'
// import { connect } from 'react-redux'

export const functionClick = (props) => {
    function cickHandler(){
        console.log("Clicked")
    }
    return (
        <div>
            <button onClick={cickHandler}>Click</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default functionClick
