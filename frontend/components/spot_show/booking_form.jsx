import React from 'react';
import { Redirect } from 'react-router-dom';

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
      guests: 0,
      fireRedirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.clearBookingErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      let booking;
      if (this.state.startDate && this.state.endDate) {
        booking = {
          start_date: this.state.startDate._d,
          end_date: this.state.endDate._d,
          spot_id: this.props.spot.id,
          user_id: this.props.currentUser.id
        };
      }
      this.props.createBooking(booking).then(
        () => this.setState({ fireRedirect: true }),
        () => this.setState({ fireRedirect: false })
      );
    } else {
      this.props.openModal('login');
    }
  }

  isDayBooked() {
    let dates = [];
    this.props.bookings.forEach((booking) => {
      if (booking.spot_id === this.props.spot.id) {
        dates = dates.concat(this.getDates(booking.start_date, booking.end_date));
      }
    });
    return dates;
  }

  getDates(startDate, endDate) {
    let dateArray = [];
    let currentDate = moment(startDate);
    let stopDate = moment(endDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  }

  renderErrors() {
    return(
      <ul className="bookings-errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <section className="booking-form-container">
        <p className="booking-form-p"><span>${this.props.spot.price}</span> per night</p>
        <div className="form-line"></div>
        <form onSubmit={(e) => this.handleSubmit(e)} className="booking-form">

          { this.renderErrors() }

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
              isDayBlocked={day => this.isDayBooked().includes(moment(day).format('YYYY-MM-DD'))}
              />



            <input className="booking-submit" type="submit" value="Book" />
        </form>

        {this.state.fireRedirect && (
          <Redirect to='/bookings'/>
        )}
      </section>
    );
  }
}


// <label>Guests</label>
//   <select className="booking-form-input"></select>
