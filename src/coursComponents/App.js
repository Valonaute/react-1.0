import { Component } from 'react';
import Mycars from './Mycars';
import './App.css';
import Welcome from './Welcome';
import Display from './Display';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
      <Display />
      </div>
    )
  }
}

export default App;