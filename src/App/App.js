import React, { Component } from 'react';
import ReservationsList from '../ReservationsList/ReservationsList.js'
import FormReservation from '../FormReservation/FormReservation.js'
// import Reservation from '../Reservation/Reservation.js'
import { getAllReservations, addNewReservation, deleteNewReservation } from '../apiCalls.js'
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

  makeReservation = (reservationInfo) => {
    this.setState({ reservations: [...this.state.reservations, reservationInfo]})
    addNewReservation(reservationInfo);
  }

  deleteReservation = (cardId) => {
    deleteNewReservation(cardId);
    // I don't think I was able to get the delete working!
    const remainingReservations = this.state.reservations.filter(reservation => {
      return reservation.id !== cardId
    })
    this.setState({ reservations: remainingReservations})
  }

  render() {
    return (
      <main>
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
          <FormReservation makeReservation={this.makeReservation}/>
          </div>
          <div className='resy-container'>
            <ReservationsList reservations={this.state.reservations} cancelReservation={this.deleteReservation}/>
          </div>
        </div>
      </main>
    )
  }
}

export default App;
