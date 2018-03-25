import React from "react";
import BookingIndexItem from "./booking_index_item";

export default class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
    this.props.fetchCurrentUser();
  }

  render() {
    const orderedBookings = this.props.bookings.sort(function(a, b) {
      return a.start_date > b.start_date;
    });

    const allBookings = orderedBookings.map(booking => {
      if (booking.user_id === this.props.currentUserId) {
        return (
          <BookingIndexItem
            key={booking.id}
            booking={booking}
            spot={this.props.spots[booking.spot_id] || ""}
          />
        );
      }
    });

    return (
      <section className="booking-index-section">
        <section className="booking-index-inner">
          <h1>Trips</h1>
          <ul className="booking-index-items">{allBookings}</ul>
        </section>
      </section>
    );
  }
}
