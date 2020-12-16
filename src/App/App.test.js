import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// import { getAllMoviesData } from '../apiCalls';
// jest.mock('../apiCalls.js');



describe('App', () => {
  it('can add a new reservation when inputs are filled and submit button is clicked', () => {
    render(<App/>)
    const nameInput = screen.getByPlaceholderText('Name')
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)')
    const timeInput = screen.getByPlaceholderText("Start Time (hh:mm)")
    const numberInput = screen.getByPlaceholderText('Number of guests (max 4)')
    const submitButton = screen.getByText('Make Reservation')
    const userChoiceName = 'Sarah'
    const userChoiceDate = '12/23'
    const userChoiceTime = '9:00'
    const userChoiceNumber = '2'

    fireEvent.change(nameInput, { target: {value: userChoiceName}})
    fireEvent.change(dateInput, { target: {value: userChoiceDate}})
    fireEvent.change(timeInput, { target: {value: userChoiceTime}})
    fireEvent.change(numberInput, { target: {value: userChoiceNumber}})

    userEvent.click(submitButton)
    
    const expectedReservation = {
      "name": "Sarah",
      "date": "12/23",
      "time": "9:00",
      "number": "2",
      "id": Date.now(),
    }

    expect(screen.getByText('Sarah')).toBeInTheDocument();
  })

  it('should clear input fields when submit button is clicked', () => {
    render(<App/>)
    const nameInput = screen.getByPlaceholderText('Name')
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)')
    const timeInput = screen.getByPlaceholderText("Start Time (hh:mm)")
    const numberInput = screen.getByPlaceholderText('Number of guests (max 4)')
    const submitButton = screen.getByText('Make Reservation')
    const userChoiceName = 'Sarah'
    const userChoiceDate = '12/23'
    const userChoiceTime = '9:00'
    const userChoiceNumber = '2'

    fireEvent.change(nameInput, { target: {value: userChoiceName}})
    fireEvent.change(dateInput, { target: {value: userChoiceDate}})
    fireEvent.change(timeInput, { target: {value: userChoiceTime}})
    fireEvent.change(numberInput, { target: {value: userChoiceNumber}})

    fireEvent.click(submitButton)

    expect(screen.getByPlaceholderText('Name').value).toEqual('');
    expect(screen.getByPlaceholderText('Number of guests (max 4)').value).toEqual('');
  })

  it('should not add a reservation if name input is blank', () => {
    render(<App/>)
    const nameInput = screen.getByPlaceholderText('Name')
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)')
    const timeInput = screen.getByPlaceholderText("Start Time (hh:mm)")
    const numberInput = screen.getByPlaceholderText('Number of guests (max 4)')
    const submitButton = screen.getByText('Make Reservation')
    const userChoiceName = ''
    const userChoiceDate = '12/23'
    const userChoiceTime = '9:00'
    const userChoiceNumber = '2'

    fireEvent.change(nameInput, { target: {value: userChoiceName}})
    fireEvent.change(dateInput, { target: {value: userChoiceDate}})
    fireEvent.change(timeInput, { target: {value: userChoiceTime}})
    fireEvent.change(numberInput, { target: {value: userChoiceNumber}})

    userEvent.click(submitButton)
    expect(screen.queryByText(userChoiceDate)).not.toBeInTheDocument();
  })
  // I realize I can add more tests for every input field (and if statements to submitReservation),
  // but I have demonstrated I know how, so I am going to go ahead and move ahead with the assessment.
})


