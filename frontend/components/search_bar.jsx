import React from 'react';
import { connect } from 'react-redux';
import { receiveCoordinates } from '../actions/coordinate_actions';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      address: ''
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode( {address: this.state.address}, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        this.props.receiveCoordinates([lat, lng]);
        this.props.history.push('/spots');
        
        // dispatch action here that hits ui reducer
        // push history with spots and it will go there based on route
      }
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    return (
      <form onSubmit={ (e) => this.handleSubmit(e) } className="home-search-bar-form">
        <div className="home-search-bar-wrapper">
          <input onChange={this.update('address')} type="text" value={ this.state.address } placeholder="Try 'Los Angeles'" className="home-search-bar" />
          <input type="submit" value="Search" className="home-search-button" />
          <i class="material-icons">search</i>
        </div>
      </form>
    );
  }

}

const msp = state => ({

});


const mdp = dispatch => ({
  receiveCoordinates: (coords) => dispatch(receiveCoordinates(coords))
});


export default withRouter(connect(msp, mdp)(SearchBar));
