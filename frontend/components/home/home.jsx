import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {

    return (
      <section className="home-page-container">
        <section className="home-page">
          <main>
            <p>Book unique homes and</p>
            <p>experiences all over the world.</p>
          </main>
        </section>

        <section className="home-explore-section">
          <h1>Explore balmybnb</h1>
          <ul>
            <Link to="/spots">
              <li>
                <div className="home-explore-item-picture">IMAGE</div>
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
