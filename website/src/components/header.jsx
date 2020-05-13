import React, { Component } from 'react'

class Header extends Component {
    render () {
      return (
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Mrunal Ghorpade</h1>
              <h3>I am masters student of <span>Information Systems</span> at Northeastern University.
                I am an experienced software developer, with extensive work experience in <span>backend development</span>and <span>Cloud Technologies</span><a className="smoothscroll" href="#about"> start scrolling</a>
                 <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href="https://www.facebook.com/mrunalghopade"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.linkedin.com/in/mrunal-ghorpade95/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/mrunalghorpade11"><i className="fa fa-github"></i></a></li>
                <li><a href="#"><i className="fa fa-skype" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      );
    }
  };

  export default Header;