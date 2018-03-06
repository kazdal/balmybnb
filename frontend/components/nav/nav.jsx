import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (
      <nav className="nav-bar">
        <i className="fas fa-sun"></i>

        <ul>
          <li><a>Become a host</a></li>
          <li><a>Help</a></li>
          <li><a>Sign Up</a></li>
          <li><a>Log In</a></li>
        </ul>
      </nav>
    );
  }
}
