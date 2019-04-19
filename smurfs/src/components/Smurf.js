import React, { Component } from 'react'

class Smurf extends Component {
    render() {
        console.log("Smurf props: ",  this.props)
        return (
        <div>
            <h2>{this.props.smurf.name}</h2>
            <p>{this.props.smurf.age}</p>
            <p>{this.props.smurf.height}</p>
        </div>
        )
    }
}

export default Smurf;