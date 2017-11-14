import React, { Component } from 'react' ;
import './HelloWorld.css';

class HelloWorld extends Component {
  render() {
    return (
      <div>
      <h1>{this.props.name}</h1>
      <img className = "image" className="App-logo" src="http://www.pngmart.com/files/2/Pokeball-PNG-Photos.png"/>
      </div>
    );
  }
}

export default HelloWorld;
