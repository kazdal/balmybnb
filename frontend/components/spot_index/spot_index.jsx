import React from 'react';

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {

    return (
      <section className="spot-index-section">
        <ul>
          
        </ul>
      </section>
    );
  }
}
