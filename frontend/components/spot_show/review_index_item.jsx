import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  starCounter(){
    // let stars = [];
    // for (var i = 0; i <= 5; i++) {
    return new Array(5).fill().map((e, i) => {
      if (i < this.props.review.rating) {
        return (<li key={`${this.props.review.id + i}`}><i className="material-icons">star</i></li>);
      } else {
        return (<li key={`${this.props.review.id + i}`}><i className="material-icons">star_border</i></li>);
      }
    });
    // debugger
    // return stars;
  }

  render() {
    const { body, title } = this.props.review;


    return (
      <li className="review-index-item">
        <div className="review-index-header">
          <h1>
            { title }
          </h1>
          <ul className="review-rating-stars">
            { this.starCounter() }
          </ul>
        </div>
        <p>{ body }</p>
      </li>
    );
  }
}

export default ReviewIndexItem;
