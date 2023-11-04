import './App.css';
import React, { useState } from 'react';
import Mybikes from './components/Mybikes';
import Bikes from './components/Bikes';

class App extends React.Component {

	state = {
		titre: 'Mon catalogue de vélos'
	}
  	render() {
   		return (
    		<div className="App">
				<Mybikes title={this.state.titre}>
				<Bikes/>
				</Mybikes>
			</div>
   		)
   	}   
}

export default App;
