import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  signedInNav() {
    return (
      <nav>
        <ul>
          <li><a>Become a host</a></li>
          <li><a>Saved</a></li>
          <li><a>Trips</a></li>
          <li><a>Help</a></li>
          <li><a><img className="nav-picture" alt="Profile picture" src="https://a0.muscache.com/im/pictures/41b239ba-1b29-488c-9e84-828d0d5e0073.jpg?aki_policy=profile_small" /></a></li>
        </ul>
      </nav>
    );
  }

  signedOutNav() {
    return (
      <nav>
        <ul>
          <li><a>Become a host</a></li>
          <li><a>Help</a></li>
          <li onClick={() => this.props.openModal('signup')}><a>Sign Up</a></li>
          <li onClick={() => this.props.openModal('login')}><a>Log In</a></li>
        </ul>
      </nav>
    );
  }

  render() {


    return (
      <header className="nav-bar">
        <i className="fas fa-sun"></i>
          { this.props.currentUser ?
            this.signedInNav() :
            this.signedOutNav()
          }

      </header>
    );
  }
}
