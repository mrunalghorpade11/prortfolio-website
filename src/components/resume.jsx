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
                <h3>Northeastern University, Boston, USA</h3>
                <p className="info">Masters in Information Systems <span>•</span> <em className="date">August 2020</em></p>
                <p> Relevant Courses: Cloud Computing, Program Strucutres and Algorithms, Web Development, DevOps, Big Data Indexing </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Savitribai Phule Pune Univeristy, India</h3>
                <p className="info">B.E Computer Engineering <span>•</span> <em className="date">June 2017</em></p>
                <p> Relevant Courses: Software Engineering, Data structures and Problem Solving, Database managment and Design, Theory of Computation, Operating Systems </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Northeastern University, Boston</h3>
                <p className="info">Online Program Technician<span>•</span> <em className="date">Jan 2019 - present</em></p>
                <p>
                  Responsible for recording, editting and uploading inclass lectures for Online learning students
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Retail Business Services - Ahold Delhize, Boston </h3>
                <p className="info">Backend Developer Co-op<span>•</span> <em className="date">June 2019 - December 2019</em></p>
                <p>
                  Developed RESTful APIs using NodeJs, MongoDB containerized using Docker, deployed on Azure
                   .Implemented CI/CD pipelines using Azure Devops, created swagger documentations for APIs, Maintained code quality using SonarQube.
                 </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Ellicium Solutions, Pune</h3>
                <p className="info">Sr. Software Developer <span>•</span> <em className="date">November 2017 - June 2018</em></p>
                <p>
                  Developed large scale web applications for windows based systems.  Used Java Spring, Jquery, SQL server for development. Developed frontend screens using Jquery framework(KendoUI) and Ajax.
                  Created TIBCO BW processes for application integration. Used Git for source code managment. Followed Agile Software development methodology. Gained profiency in client communication.
                  </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Persistent Systems, Pune</h3>
                <p className="info">Project Intern <span>•</span> <em className="date">June 2016 - May 2017</em></p>
                <p>
                  Developed Movie Recommendation System using Raspberry pi. Used Speech to Text and Text to speech algorithms for voice input and output. Studied datamining algorithms-Naive Bayes, Random Forest, Decision Tree, SVM. Used Naive BayesStudied datamining algorithms-Naive Bayes, Random Forest, Decision Tree, SVM. Used Naive Bayes
                  </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}

        {/* Start Projects*/}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Covid-19 Research Volunteer Website</h3><h4><a href="http://skunks.ai/">http://skunks.ai/</a></h4>
                <p>Lead for Source code managment and CI/CD. Worked on development using ReactJs, Nodejs, MongoDB. Deployed on AWS servers using Kubernetes</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Bill Managment System</h3><h4><a href="https://github.com/mrunalghorpade11/webapp">https://github.com/webapp/</a></h4>
                <p> Developed RESI APIs in NodeJS, along with basic authentication to protect from unauthorized access. Built Infrastructure setup for networking and deployment using AWS cloudformation. Used Multiple AWS services like EC2, S3, cloudWatch, lambda functions, codeDeploy, cloudFormation</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Prototype for E-commerse Website</h3><h4><a href="https://github.com/mrunalghorpade11/E-commerce-application-using-spring-hibernate">http://github.com/E-commersewebsite/</a></h4>
                <p>Implemented using SpringMVC, Hibernate, Mysql. Used Singleton and factory design patters along with multithreading</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Big Data- Elastic Search</h3>
                <p>Developed SpringBoot application which utilizes JSON schema to store documents into Redis. Used technologies like Elastic Search for data indexing, Kibana for data visualization and querying, OAuth for token
                    generation, Etag for caching and conditional requests</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Robotic Controller Maze Navigation Using Genetic Algorithms</h3>
                <p>Used Genetic Algorithm to design a robotic controller, that uses sensors to navigate through a maze. Designed Junit tests to check efficiency of the algorithm</p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Projects */}
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
                <li><span className="bar-expand nodejs" /><em>Web Frameworks(NodeJS, Spring MVC, ReactJS)</em></li>
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