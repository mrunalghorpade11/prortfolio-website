import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <did className="contact-text">Find me on</did>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/mrunalghopade"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://www.linkedin.com/in/mrunal-ghorpade95/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/mrunalghorpade11"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
};
export default Footer;