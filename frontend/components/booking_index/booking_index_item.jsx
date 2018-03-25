import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export default class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { booking, spot } = this.props;

    return (
      <li className="booking-index-item">
        <Link to={`/spots/${spot.id}`}>
          <img className="booking-item-img" />
        </Link>

        <div className="booking-index-item-text">
          <h1>{spot.title}</h1>
          <p>
            {moment(booking.start_date).format("MMM Do")} -{" "}
            {moment(booking.end_date).format("MMM Do YYYY")}
          </p>
          <Link to={`/spots/${spot.id}`}>
            <p>{spot.title}</p>
          </Link>
        </div>
      </li>
    );
  }
}
