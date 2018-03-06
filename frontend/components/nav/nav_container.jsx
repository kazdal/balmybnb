import { connect } from 'react-redux';
import Nav from './nav';

const msp = state => {
  return {
    // loginModal: state.ui.loginModal,
    // sessionModal: state.ui.sessionModal
  };
};

const mdp = dispatch => {
  return {
    // toggleLoginModal: () => dispatch(),
    // toggleSessionModal: () => dispatch()
  };
};

export default connect(msp, mdp)(Nav);
