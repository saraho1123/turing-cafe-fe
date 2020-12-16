import React, { Component } from 'react';
import ReservationsList from '../ReservationsList/ReservationsList.js'
import Reservation from '../Reservation/Reservation.js'
import { getAllReservations } from '../apiCalls.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  

  render() {
    return (
      <main>
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
  
          </div>
          <div className='resy-container'>
            
          </div>
        </div>
        <ReservationsList />
      </main>
    )
  }
}

export default App;
