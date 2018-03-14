import React from 'react';

export default class ReviewForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      rating: 5
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
    const review = Object.assign({}, this.state);
    this.props.createReview(review);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="review-form">
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
