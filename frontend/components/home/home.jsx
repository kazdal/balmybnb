import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {

    return (
      <section className="home-page">
        <main>
          <p>Book unique homes and</p>
          <p>experiences all over the world.</p>
        </main>
      </section>
    );
  }
}
