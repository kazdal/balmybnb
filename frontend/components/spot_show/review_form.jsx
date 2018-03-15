import React from 'react';

export default class ReviewForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      rating: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="review-form">
        <label>Rate your stay</label>
          <fieldset class="review-form-stars" onChange={() => this.update('rating')}>
            <input type="radio" id="star5" name="rating" value="5" /><label class="Full" for="star5"></label>
            <input type="radio" id="star4" name="rating" value="4" /><label class="Full" for="star4"></label>
            <input type="radio" id="star3" name="rating" value="3" /><label class="Full" for="star3"></label>
            <input type="radio" id="star2" name="rating" value="2" /><label class="Full" for="star2"></label>
            <input type="radio" id="star1" name="rating" value="1" /><label class="Full" for="star1"></label>
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
