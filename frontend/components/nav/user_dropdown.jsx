import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    this.props.logout();
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal transparent-modal" onClick={this.props.closeModal}>
        <ul
          className={"nav-user-dropdown-show nav-user-dropdown"}
        >
          <li
            className="nav-user-dropdown-logout"
            onClick={() => this.handleLogout()}
          >
            Log Out
          </li>
        </ul>
      </div>
    );
  }
}

const msp = state => ({});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(UserDropdown);
