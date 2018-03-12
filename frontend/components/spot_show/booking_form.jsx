import React from 'react';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      guests: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let booking = {
      start_date: this.state.startDate._d,
      end_date: this.state.endDate._d,
      spot_id: this.props.spot.id,
      user_id: this.props.currentUserId
    };
    this.props.createBooking(booking);
  }



  render() {
    return (
      <section className="booking-form-container">
        <p className="booking-form-p"><span>${this.props.spot.price}</span> per night</p>
        <div className="form-line"></div>
        <form onSubmit={this.handleSubmit} className="booking-form">
          <label>Dates</label>

            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="startDate"
              endDate={this.state.endDate}
              endDateId="endDate"
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              startDatePlaceholderText="Check In"
              endDatePlaceholderText="Check Out"
              />

          <label>Guests</label>
            <select className="booking-form-input"></select>

            <input className="booking-submit" type="submit" value="Book" />
        </form>
      </section>
    );
  }
}
