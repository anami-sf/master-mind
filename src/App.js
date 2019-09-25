import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker'
import GameTimer from './components/GameTimer'
import NewGameButton from './components/NewGameButton'
import Footer from './components/Footer'


class App extends Component {
  constructor() {
    super()
    this.state = {
      selColorIdx: 0
    }
  }

  render() {
    return (
      <div className="App" >
        selected color: {this.state.selColorIdx}
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <ColorPicker />
        <GameTimer />
        <NewGameButton />
        <Footer />    
      </div>
    )
  }

}

export default App;
