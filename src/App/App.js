import React, { Component } from 'react';
import ReservationsList from '../ReservationsList/ReservationsList.js'
import FormReservation from '../FormReservation/FormReservation.js'
// import Reservation from '../Reservation/Reservation.js'
import { getAllReservations } from '../apiCalls.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }

  componentDidMount = () => {
    getAllReservations()
      .then(reservationData => this.setState({ reservations: reservationData}))
  }

  render() {
    return (
      <main>
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
          <FormReservation/>
          </div>
          <div className='resy-container'>
            <ReservationsList reservations={this.state.reservations}/>
          </div>
        </div>
      </main>
    )
  }
}

export default App;
