import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  componentDidMount () {
    document.addEventListener("click", (e) => {
      if (!(Object.assign([], e.target.classList).includes("nav-picture")) &&
          this.state.active === true) {
        this.toggleClass();
      }
    });
  }

  componentWillUnmount () {
    document.removeEventListener("click", (e) => {
      if (!(Object.assign([], e.target.classList).includes("nav-picture")) &&
          this.state.active === true) {
        this.toggleClass();
      }
    });
  }

  signedInNav() {
    return (
      <nav>
        <ul className="nav-items">
          <li><a>Become a host</a></li>
          <li><a>Saved</a></li>
          <li><a>Trips</a></li>
          <li><a>Help</a></li>
          <li className="nav-pic-container" onClick={() => this.toggleClass()}><a><img className="nav-picture" alt="Profile picture" src="https://a0.muscache.com/im/pictures/41b239ba-1b29-488c-9e84-828d0d5e0073.jpg?aki_policy=profile_small" />
            {this.userDropdown()}
          </a></li>
        </ul>
      </nav>
    );
  }

  signedOutNav() {
    return (
      <nav>
        <ul className="nav-items">
          <li><a>Become a host</a></li>
          <li><a>Help</a></li>
          <li onClick={() => this.props.openModal('signup')}><a>Sign Up</a></li>
          <li onClick={() => this.props.openModal('login')}><a>Log In</a></li>
        </ul>
      </nav>
    );
  }

  userDropdown() {
    return (
      <ul className={this.state.active ? "nav-user-dropdown-show nav-user-dropdown" : "nav-user-dropdown"}>
        <li className="nav-user-dropdown-logout" onClick={() => this.props.logout()}>Log Out</li>
      </ul>
    );
  }

  render() {
    return (
      <header className={(this.props.match.path ==="/spots") ? "nav-bar spot-index-nav-bar" : "nav-bar"}>
        <Link to="/">
          <i className="fas fa-sun"></i>
        </Link>
          { this.props.currentUser ?
            this.signedInNav() :
            this.signedOutNav()
          }

      </header>
    );
  }
}
