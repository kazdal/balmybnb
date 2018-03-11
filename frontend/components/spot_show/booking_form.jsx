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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(this.state);
  }



  render() {

    return (
      <section className="booking-form-container">
        <p><span>$NUMBER</span>per night</p>
        <div className="form-line"></div>
        <form className="booking-form">
          <label>Dates</label>
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="your_unique_start_date_id"
              endDate={this.state.endDate}
              endDateId="your_unique_end_date_id"
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              />
          <label>Guests</label>
            <input className="booking-form-input"></input>


        </form>
      </section>
    );
  }
}
