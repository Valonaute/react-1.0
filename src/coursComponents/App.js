import { Component } from 'react';
import Mycars from './Mycars';
import './App.css';
import Welcome from './Welcome';
import Display from './Display';
import Form from './Form';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
      <Form />
      </div>
    )
  }
}

export default App;