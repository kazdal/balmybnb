import React from 'react';

export default class ReviewForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      rating: 3
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStars = this.handleStars.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const review = Object.assign({}, this.state);
    this.props.createReview(review);
  }

  handleStars(value) {
    this.setState({
      rating: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="review-form">
        <label>Rate your stay</label>
          <fieldset class="review-form-stars" onChange={() => this.update('rating')}>
            <input type="radio" id="star5" name="rating" value="5" checked={this.state.rating === 5} onChange={() => this.handleStars(5)}/><label for="star5"></label>
            <input type="radio" id="star4" name="rating" value="4" checked={this.state.rating === 4} onChange={() => this.handleStars(4)}/><label for="star4"></label>
            <input type="radio" id="star3" name="rating" value="3" checked={this.state.rating === 3} onChange={() => this.handleStars(3)}/><label for="star3"></label>
            <input type="radio" id="star2" name="rating" value="2" checked={this.state.rating === 2} onChange={() => this.handleStars(2)}/><label for="star2"></label>
            <input type="radio" id="star1" name="rating" value="1" checked={this.state.rating === 1} onChange={() => this.handleStars(1)}/><label for="star1"></label>
          </fieldset>
        <label>Title
          <input type="text" value={this.state.title} onChange={this.update('title')} placeholder="Title your review"></input>
        </label>

        <label><p>Describe Your Experience <span>(required)</span></p>
          <textarea onChange={this.update('body')} value={this.state.body} placeholder="How was your trip?"></textarea>
        </label>

        <input className="session-submit width-35 flex-three" type="submit" value="Leave Review" />
      </form>
    );
  }
}
