import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'id001',
        },
        {
          name: 'Dracula',
          id: 'id002',
        },
        {
          name: 'Zombie',
          id: 'id003',
        },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
