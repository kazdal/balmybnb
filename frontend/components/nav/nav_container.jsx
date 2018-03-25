import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { clearSessionErrors } from "../../actions/session_actions";
import Nav from "./nav";

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(msp, mdp)(Nav);
