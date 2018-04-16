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
              <a href="http://dkang.me" className="footer-portfolio">
                made by
                <img src="https://s3.amazonaws.com/balmybnb-dev/dkvng.png" />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/dkvng">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dkvng">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}
