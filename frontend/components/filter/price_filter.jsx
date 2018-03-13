import React from 'react';

export default class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="modal" onClick={this.props.closeModal}>
        <div className="login-form-container" onClick={e => e.stopPropagation()}>
          THIS A PRICE FILTER
        </div>
      </div>
    );
  }
}
