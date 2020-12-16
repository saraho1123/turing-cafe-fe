import React from 'react'
import ReservationsList from '../ReservationsList/ReservationsList'
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getAllReservations } from '../apiCalls';
jest.mock('../apiCalls.js');

describe('ReservationsList', () => {
  let mockedReservations;
  beforeEach(() => {
    mockedReservations = [
      {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
      },
      {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
      },
      {
        "id": 3,
        "name": "Pam",
        "date": "1/21",
        "time": "6:00",
        "number": 4
      },
    ]
  })

  it('should display cards on page load', async () => {
  //   getAllReservations.mockResolvedValueOnce([
  //     {
  //       "id": 1,
  //       "name": "Christie",
  //       "date": "12/29",
  //       "time": "7:00",
  //       "number": 12
  //     },
  //   ]
  //  )

  //   render(
  //     <ReservationsList 
  //       reservationsList={mockedReservations}
  //     />
  //   )

  //   const christieReservation = await waitFor(() => screen.getByText("Christie"))
  //   // const letaReservation = await waitFor(() => screen.getByText("Leta"))
  //   // const pamReservation = await waitFor(() => screen.getByText("Pam"))

  //   expect(christieReservation).toBeInTheDocument()
  //   // expect(letaReservation).toBeInTheDocument()
  //   // expect(pamReservation).toBeInTheDocument()
  })
})