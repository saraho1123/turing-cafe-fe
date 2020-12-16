import React from 'react'
import './Reservation.css'

const Reservation = ({ id, name, date, time, number, cancelReservation}) => {
  return (
    <section className="reservation-card">
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}pm</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => cancelReservation(id)} className="delete-button">Cancel Reservation</button>
    </section>
  )
}

export default Reservation;
