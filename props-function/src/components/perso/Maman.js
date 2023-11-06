import {Component} from 'react';
import Valo from './Valo';

class Maman extends Component {

  state = {
    messageMaman: null, 
    messageValo: null
  }

  ordreMaman = () => {
    this.setState({
      messageMaman: "Viens manger!"
    })
  }

  reponseValo = () => {
    this.setState({
      messageValo: "J'arrive !"
    })
  }

  render() {
    return (
      <div>
        <h1> Maman </h1>
        <button onClick={this.ordreMaman}> Ordre de la mère</button>
        <p> { this.state.messageMaman } </p>
        <hr />

        <Valo name="Valo" reponseValoProps={this.reponseValo} leState={this.state} />

      </div>
    )
  }
}

export default Maman;