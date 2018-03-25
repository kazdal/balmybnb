import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="page-footer">
        <div className="form-line" />

        <section>
          <ul className="footer-left">
            <li>&#169; balmybnb, Inc.</li>
          </ul>

          <ul className="footer-right">
            <li>
              made by
              <img src="https://s3.amazonaws.com/balmybnb-dev/dkvng.png" />
            </li>
            <li>
              <a href="https://www.github.com/dkvng">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dakang">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}
