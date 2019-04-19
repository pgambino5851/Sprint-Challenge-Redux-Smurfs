import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Smurf from './Smurf'
import {getSmurfs, addSmurf} from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    newSmurf: {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    return this.props.getSmurfs()
  }

  handleChange = e => {
    
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    })
  }

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  render() {
    
    return (
      <div className="App">
        <h1>Redux Smurfs</h1>
        {this.props.smurfs.map(smurf => {
         return <Smurf id = {smurf.id} smurf={smurf} />
        })}
        <form>
          <input
            type="text"
            name="name"
            value={this.state.newSmurf.name}
            placeholder="Name...."
            onChange={this.handleChange} 
            />
            <div />
            <input
            type="text"
            name="age"
            value={this.state.newSmurf.age}
            placeholder="Age...."
            onChange={this.handleChange} 
            />
            <div />
            <input
            type="text"
            name="height"
            value={this.state.newSmurf.height}
            placeholder="Height...."
            onChange={this.handleChange} 
            />
            <div />
            <button onClick={this.addSmurf}>Submit New Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
