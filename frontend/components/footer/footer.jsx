import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <footer className="page-footer">
        <div className="form-line"></div>

        <section>
          <ul className="footer-left">
            <li>&#169; balmybnb, Inc.</li>
          </ul>

          <ul className="footer-right">
            <li>made by
              <img src="%image_path(dkang.png)%"></img></li>
            <li>
              <a href="https://www.github.com/dkvng"><i class="fab fa-github"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dakang"><i class="fab fa-linkedin-in"></i></a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}
