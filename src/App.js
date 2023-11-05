import './App.css';
import React from 'react';
import Mybikes from './components/Mybikes';
import Header from './components/header';
import Wrapper from './components/wrapper';

class App extends React.Component {

	state = {
		titre: "Ma liste de vélos"
	}

	changerTitre = (e) => {
		console.log(e.target);

		this.setState({
			titre: "Les vélos de l'équipe pro"
		})
	}

	changerTitreParam = (titre) => {
		this.setState({
			titre: titre
		})
	}

	changerTitreBind = (param) => {
		this.setState({
			titre: param
		})
	}

	changerViaInput = (e) => {
		this.setState({
			titre: e.target.value
		})
	}



  	render() {
   		return (
    		<div className="App">
				<Wrapper>
					<Header>
						{this.state.titre}	
					</Header>
				</Wrapper>
				
				<Mybikes>
				
				</Mybikes>

				<button onClick={ this.changerTitre}> Changer le nom en dur </button>

				<button onClick={() => this.changerTitreParam('Titre via un paramètre')}> Changer le nom avec paramètres </button>

				<button onClick={this.changerTitreBind.bind(this, 'Titre via Bind')}> Changer le nom avec bind </button>
				<input type="text" onChange={this.changerViaInput} value={this.state.titre} />
			</div>
   		)
   	}   
}

export default App;
