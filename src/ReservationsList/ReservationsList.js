import React from 'react'
import Reservation from '../Reservation/Reservation'
import './ReservationsList.css'

const ReservationsList = ({ reservations, cancelReservation }) => {
  const reservationCards = reservations.map(reservation => {
    return (
      <Reservation
        id={reservation.id}
        key={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        cancelReservation={cancelReservation}
      />
    )
  })
  return (
    <section className="reservations-container">
      { reservationCards }
    </section>
  )
}

export default ReservationsList;

