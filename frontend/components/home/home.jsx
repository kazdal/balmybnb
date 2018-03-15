import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

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
        </section>
      </section>
    );
  }
}
