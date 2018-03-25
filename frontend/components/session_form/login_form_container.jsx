import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { clearSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "Log in"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    otherForm: () => dispatch(openModal("signup")),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
