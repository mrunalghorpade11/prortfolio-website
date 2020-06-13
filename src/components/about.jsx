import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profile.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am a Master's degree student of Information Systems from Northeastern University, expected to graduate in August 2020. I am specializing in the software development track.
               I am a proactive and self-motivated person who enjoy working in challenging environments.
              </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Mrunal Ghorpade</span><br />
                  <span>(857)308-6053</span><br />
                  <span>mrunal.ghorpade123@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="static/Mrunal_Ghorpade.pdf" downlaod className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
    );
  }
};
export default About;