import React, { Component } from 'react'

class Resume extends Component {
    render() {
      return (
        <section id="resume">
         
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Northeastern University</h3>
                  <p className="info">Masters in Information Systems <span>•</span> <em className="date">August 2020</em></p>
                  <p>
                    Relevant Courses : Network Structures and Cloud Computing , Application Engineering and Development, Web Development Tools and Methods, Big data Indexing technique, Development and Operations(DevOps), Database Managment and Design, Program Structures and Algorithms.   
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Savitribai Phule Pune Univeristy</h3>
                  <p className="info">B.E Computer Engineering <span>•</span> <em className="date">June 2017</em></p>
                  <p>
                   Revelant Courses : Object Oriented Programming, Software Engineering, Complier Design, Theory Of Computation, Operating System Design, Networking, Microprocessor Architecture, Microprocessor Interfacing Techniques, Maths  
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}

          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                  <h3>Northeastern University</h3>
                  <p className="info">Online Program Technician<span>•</span> <em className="date">Jan 2019 - present</em></p>
                 <p>
                   Responsible for recording, editting and uploading inclass lectures for Online learning students   
                </p>
                </div>
                </div>
              <div className="row item">
                <div className="twelve columns">
                  <h3>Retail Business Services - Ahold Delhize</h3>
                  <p className="info">Backend Developer Co-op<span>•</span> <em className="date">June 2019 - December 2019</em></p>
                 <p>
                 Developed RESTful APIs using NodeJs, MongoDB containerized using Docker, deployed on Azure
                  .Implemented CI/CD pipelines using Azure Devops, created swagger documentations for APIs, Maintained code quality using SonarQube.
                 </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Ellicium Solutions</h3>
                  <p className="info">Sr. Software Developer <span>•</span> <em className="date">November 2017 - June 2018</em></p>
                  <p>
                  Developed large scale web application for windows based system.  Used Java Spring, Jquery, SQL server for development. Developed frontend screens using Jquery framework(KendoUI) and Ajax. 
                  Created TIBCO BW processes for application integration. Used Git for source code managment. Followed Agile Software development methodology. Gained profiency in client communication. 
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
  
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p> 
              I have a strong hold over Java, Javascript. I have experience with MySQL, MongoDB, Redis on the database side. My work has successfully demonstrated building scalable, microservice-based software solutions that can solve complex business problems.
              </p>
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand java" /><em>Object Oriented Programming(Java, C++, C#)</em></li>
                  <li><span className="bar-expand javascript" /><em>Javascript</em></li>
                  <li><span className="bar-expand nodejs" /><em>Web Frameworks(NodeJS, Spring MVC)</em></li>
                  <li><span className="bar-expand aws" /><em>Public Cloud platforms(AWS, Azure)</em></li>
                  <li><span className="bar-expand sql" /><em>SQL</em></li>
                  <li><span className="bar-expand nosql" /><em>NoSql</em></li>
                  <li><span className="bar-expand agile" /><em>Agile</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section>
      );
    }
  };
  export default Resume;