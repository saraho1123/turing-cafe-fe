import React from 'react';
import FormReservation from './FormReservation.js';
import { render, screen, fireEvent } from '@testing-library/react';
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


  it('should call makeReservation with the correct parameters', () => {
    const mockedMakeReservation = jest.fn();
    Date.now = jest.fn().mockImplementation(() => 123456);

    render(
      <FormReservation 
        makeReservation={mockedMakeReservation}
      />
    )
    const nameInput = screen.getByPlaceholderText('Name')
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)')
    const timeInput = screen.getByPlaceholderText("Start Time (hh:mm)")
    const numberInput = screen.getByPlaceholderText('Number of guests (max 4)')
    const submitButton = screen.getByText('Make Reservation')
    const userChoiceName = 'Sarah'
    const userChoiceDate = '12/15'
    const userChoiceTime = '6:00'
    const userChoiceNumber = 2

    fireEvent.change(nameInput, { target: {value: userChoiceName}})
    fireEvent.change(dateInput, { target: {value: userChoiceDate}})
    fireEvent.change(timeInput, { target: {value: userChoiceTime}})
    fireEvent.change(numberInput, { target: {value: userChoiceNumber}})

    userEvent.click(submitButton)
    
    const expectedReservation = {
      "name": "Sarah",
      "date": "12/15",
      "time": "6:00",
      "number": "2",
      "id": Date.now(),
    }
    expect(mockedMakeReservation).toHaveBeenCalledWith(expectedReservation)
  })
})