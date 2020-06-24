import React, { Component } from 'react'
import Headerbackground from '../../public/images/transparent.png';
class Header extends Component {
    render () {
      return (
        <header id="home"style={{backgroundImage: `url(${Headerbackground})`}}>
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner" >
            <div className="banner-text">
            {/* <div class="col-sm-4">
               {/* <img className="header-images" src="images/header.jpg" alt="" /> 
            </div> */}
              <h1 className="responsive-headline">Hello!</h1>
              <h1>I'm Mrunal Ghorpade
                 <a className="smoothscroll" href="#about"></a></h1>
              <hr />
              <ul className="social">
                <li><a href="https://www.facebook.com/mrunalghopade/"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.linkedin.com/in/mrunal-ghorpade95/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/mrunalghorpade11"><i className="fa fa-github"></i></a></li>

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