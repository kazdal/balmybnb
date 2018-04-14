import React from "react";
import { connect } from "react-redux";
import { receiveCoordinates } from "../actions/coordinate_actions";
import { withRouter } from "react-router-dom";
import MarkerManager from "../util/marker_manager";
import { updateFilter } from "../actions/filter_actions";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAddressState = this.setAddressState.bind(this);
  }

  setAddressState(address) {
    this.setState({ address: address });
  }

  componentDidMount() {
    const input = document.getElementsByClassName("home-search-bar")[0];
    const autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addDomListener(window, "load", autocomplete);
    let address;
    autocomplete.addListener("place_changed", () => {
      if (!autocomplete.getPlace().formatted_address) {
        address = autocomplete.getPlace().name;
        this.setState({
          address: address
        });
        this.handleSubmit();
      } else {
        address = autocomplete.getPlace().formatted_address;
        this.setState({
          address: address
        });
        this.handleSubmit();
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: this.state.address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        this.props.receiveCoordinates([lat, lng]);
        if (this.props.location.pathname !== "/spots") {
          this.props.history.push("/spots");
        }
        // dispatch action here that hits ui reducer
        // push history with spots and it will go there based on route
      }
    });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div
        onSubmit={e => this.handleSubmit(e)}
        className="home-search-bar-form"
      >
        <form className="home-search-bar-wrapper" onSubmit={e => this.handleSubmit(e)}>
          <input
            onChange={this.update("address")}
            type="text"
            value={this.state.address}
            placeholder="Try 'Los Angeles'"
            className="home-search-bar"
          />
          <input type="submit" value="Search" className="home-search-button"   />
          <i className="material-icons">search</i>
        </form>
      </div>
    );
  }
}

const msp = state => ({});

const mdp = dispatch => ({
  receiveCoordinates: coords => dispatch(receiveCoordinates(coords)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default withRouter(connect(msp, mdp)(SearchBar));
