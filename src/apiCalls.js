export const getAllReservations = () =>  {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
}

export const addNewReservation = (reservationInfo) => {
  // console.log(reservationInfo)
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservationInfo),
  })
    .then(response => response.json())
}

export const deleteNewReservation = (id) => {
  console.log(id)
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
}