import React from 'react';
import FormReservation from './FormReservation.js';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// jest.mock('../apiCalls.js');

describe('FormReservation', () => {
  it('should display a form to submit a new reservation', () => {
    const mockedMakeReservation = jest.fn();
    render(
      <FormReservation 
        makeReservation={mockedMakeReservation}
      />
    )

    const submitButton = screen.getByText('Make Reservation')
    const nameInput = screen.getByPlaceholderText('Name')

    expect(submitButton).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
  })
})