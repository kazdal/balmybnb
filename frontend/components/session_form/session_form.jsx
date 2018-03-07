import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === 'Sign up') {
      this.state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      };
    } else {
      this.state = {
        email: '',
        password: ''
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  oppositeAction() {
    if (this.props.formType === 'Sign up') {
      return <p>Already have an account? {this.props.navLink}</p>;
    } else {
      <p>Don&#39;t have an account? {this.props.navLink}</p>;
    }
  }

  additionalInputs () {
    if (this.props.formType === 'Sign up') {
      return (
        <div>
          <input type="text"
            value={this.state.firstName}
            onChange={this.update('firstName')}
            className="login-input"
            placeholder="First name"
            />

          <input type="text"
            value={this.state.lastName}
            onChange={this.update('lastName')}
            className="login-input"
            placeholder="Last name"
            />

          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
            placeholder="Create a Password"
            />
        </div>
      );
    } else {
      return (
        <div>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
            placeholder="Password"
          />
        </div>
      );
    }
  }

  render() {

    return (
      <div className="modal">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            {this.renderErrors()}
            <div className="login-form">
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  placeholder="Email Address"
                />

              <br/>
                { additionalInputs() }
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            <hr />
            { oppositeAction() }
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
