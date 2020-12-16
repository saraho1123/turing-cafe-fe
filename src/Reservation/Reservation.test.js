import React from 'react'
import Reservation from '../Reservation/Reservation'
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


describe('Reservation', () => {
  it('should display detail for a single reservation', () => {
    render(
      <Reservation 
        id='1'
        key='1'
        name='Sarah'
        date='12/23'
        time='9:00'
        number='2'
      />
    )

    const reservationName = screen.getByText('Sarah')
    const reservationDate = screen.getByText('12/23')

    expect(reservationName).toBeInTheDocument();
    expect(reservationDate).toBeInTheDocument();
  })

  //COME BACK TO THIS ONE!
  
  // it('should remove a reservation when a user clicks the cancel button', () => {
  //   const mockCancelReservation = jest.fn();
  //   render(
  //       <Reservation 
  //         id="1"
  //         key="1"
  //         name="Pam"
  //         date="12/15"
  //         time="6:00"
  //         number="2"
  //       />
  //   )

  //   const reservationName = screen.getByText("Pam")
  //   const cancelButton = screen.getByText('Cancel Reservation');
  //   userEvent.click(cancelButton)

  //   expect(reservationName).not.toBeInTheDocument()
  // })
})