import React, { Component } from 'react';
import './FormReservation.css';

class FormReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  submitReservation = (event) => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number,
    }
    this.props.makeReservation(newReservation)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      id: null,
      name: '',
      date: '',
      time: '',
      number: '',
    })
  }

  render() {
    return (
      <form className="reservation-form">
        <input 
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={event => {this.changeHandler(event)}}
        />
        <input 
          name="date"
          placeholder="Date (mm/dd)"
          value={this.state.date}
          onChange={event => {this.changeHandler(event)}}
        />       
        <input 
          name="time"
          placeholder="Start Time  (hh:mm)"
          value={this.state.time}
          onChange={event => {this.changeHandler(event)}}
        />        
        <input 
          name="number"
          placeholder="Number of guests (max 4)"
          value={this.state.number}
          onChange={event => {this.changeHandler(event)}}
        />
        <button onClick={event => this.submitReservation(event)} className="make-reservation-button">Make Reservation</button>
      </form>
    )
  }
}

export default FormReservation;