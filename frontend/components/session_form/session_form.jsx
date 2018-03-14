import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === 'Sign up') {
      this.state = {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
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
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul className="session-errors-list">
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
      return (
        <p>Already have a balmybnb account?
          {this.props.otherForm}
        </p>
      );
    } else {
      return (
        <p>
          Don&#39;t have an account?
          {this.props.otherForm}
        </p>
      );
    }
  }

  additionalInputs () {
    if (this.props.formType === 'Sign up') {
      return (
        <div className="login-extra-inputs">
          <span className="login-input-wrapper">
            <i className="far fa-user"></i>
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className="login-input"
              placeholder="First name"
              />
          </span>

          <span className="login-input-wrapper">
            <i className="far fa-user"></i>
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className="login-input"
              placeholder="Last name"
              />
          </span>

          <span className="login-input-wrapper">
            <i className="fas fa-lock"></i>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Create a Password"
              />
          </span>
        </div>
      );
    } else {
      return (
        <div className="login-extra-inputs">
          <span className="login-input-wrapper">
            <i className="fas fa-lock"></i>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
          </span>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="modal" onClick={this.props.closeModal}>
        <div className="login-form-container" onClick={e => e.stopPropagation()}>
          <div onClick={this.props.closeModal} className="close-x"><i className="material-icons">close</i></div>
          <form onSubmit={this.handleSubmit} className="login-form-box">

            {this.renderErrors()}

            <div className="login-form">
              <span className="login-input-wrapper">
                <i className="far fa-envelope"></i>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  placeholder="Email Address"
                />
              </span>

              { this.additionalInputs() }

              <input className="session-submit" type="submit" value={this.props.formType} />

              { this.props.formType === "Log in" ? <input className="session-submit session-demo-login" type="submit" value="Demo Login" onClick={() => (this.setState({
                email: 'worldtraveler@onlywarmplaces.com', password: '123456'
              }))} /> : "" }

              <div className="form-line"></div>
              { this.oppositeAction() }
            </div>


          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
