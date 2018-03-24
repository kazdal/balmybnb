import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar';
import { connect } from 'react-redux';
import { receiveCoordinates } from '../../actions/coordinate_actions';
import { withRouter } from 'react-router-dom';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  handleExploreMosaic(lat, lng) {
    this.props.receiveCoordinates([lat, lng]);
    this.props.history.push('/spots');
  }

  render () {

    return (
      <section className="home-page-container">
        <section className="home-page">
          <main>
            <p>Book unique homes in</p>
            <p>warm climates around the world.</p>
              <SearchBar />
          </main>
        </section>
        <section className="home-explore-section">
          <h1>Explore balmybnb</h1>
          <ul>
            <Link to="/spots">
              <li>
                <img src="https://s3.amazonaws.com/balmybnb-dev/home-icon.png" className="home-explore-item-picture" />
                <div className="home-explore-item-right">
                  <h3>Homes</h3>
                </div>
              </li>
            </Link>
          </ul>

          <section className="home-explore-mosaic">
            <div className="home-explore-mosaic-4x australia"
              onClick={ () => this.handleExploreMosaic(-28.002662, 153.400253) }>
              <h3>
                Australia
              </h3>
            </div>

            <div className="home-explore-mosaic-2x california"
              onClick={ () => this.handleExploreMosaic(34.026265, -118.497149) }>
              <h3>
                Los Angeles
              </h3>
            </div>

            <div className="home-explore-mosaic-2x miami"
              onClick={ () => this.handleExploreMosaic(25.827377, -80.124694) }>
              <h3>
                Miami
              </h3>
            </div>

            <div className="home-explore-mosaic-2x panama"
              onClick={ () => this.handleExploreMosaic(32.712113, -117.192017) }>
              <h3>
                Panama
              </h3>
            </div>

            <div className="home-explore-mosaic-2x maldives"
              onClick={ () => this.handleExploreMosaic(-0.004130, 73.321958) }>
              <h3>
                Maldives
              </h3>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

const msp = state => ({

});


const mdp = dispatch => ({
  receiveCoordinates: (coords) => dispatch(receiveCoordinates(coords))
});


export default withRouter(connect(msp, mdp)(Home));
