import React from 'react';
import BookingIndexItem from './booking_index_item';

export default class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    const allBookings = this.props.bookings.map((booking) => {
      if (booking.user_id === this.props.currentUserId) {
        return <BookingIndexItem key={ booking.id } booking={ booking }></BookingIndexItem>;
      }
    });

    return (
      <section className="booking-index-section">
        <h1>Trips</h1>
        <ul className="booking-index-items">
          { allBookings }
        </ul>
      </section>
    );
  }
}
