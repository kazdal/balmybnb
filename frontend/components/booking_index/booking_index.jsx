import React from 'react';
import BookingIndexItem from './booking_index_item';

export default class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    const allBookings = this.props.bookings.map((booking) => {
      if (booking.user_id === this.props.currentUserId) {
        return <BookingIndexItem key={ booking.id } booking={ booking } spot={this.props.spots[booking.spot_id] || ""}></BookingIndexItem>;
      }
    });

    return (
      <section className="booking-index-section">
        <section className="booking-index-inner">
          <h1>Trips</h1>
          <ul className="booking-index-items">
            { allBookings }
          </ul>
        </section>
      </section>
    );
  }
}
