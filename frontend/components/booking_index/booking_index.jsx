import React from "react";
import BookingIndexItem from "./booking_index_item";
import moment from "moment";

export default class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
    this.props.fetchSpotImages();
    this.props.fetchCurrentUser();
  }

  bookingIndexItem(booking) {
    if (booking) {
      return (
        <BookingIndexItem
          key={booking.id}
          booking={booking}
          spot={this.props.spots[booking.spot_id] || ""}
          spotImages={this.props.spotImages}
        />
      );
    }
  }

  render() {
    // const orderedBookings = this.props.bookings.sort(function(a, b) {
    //   return a.start_date - b.start_date;
    // });

    let pastBookings = [];
    debugger;
    let upcomingBookings = [];
    this.props.orderedBookings.forEach(booking => {
      if (booking.user_id === this.props.currentUserId) {
        if (moment() < moment(booking.start_date)) {
          upcomingBookings.push(this.bookingIndexItem(booking));
        } else {
          pastBookings.push(this.bookingIndexItem(booking));
        }
      }
    });

    debugger
    return (
      <section className="booking-index-section">
        <section className="booking-index-inner">
          <h1>Upcoming Trips</h1>
          <ul className="booking-index-items">{upcomingBookings}</ul>

          <h1>Past Trips</h1>
          <ul className="booking-index-items">{pastBookings}</ul>
        </section>
      </section>
    );
  }
}
