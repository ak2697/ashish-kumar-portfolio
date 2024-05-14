// About.js
import React from 'react';
import './About.css';
import cpp from '../assets/cpp.jpeg';
import java from '../assets/java.jpeg';
import python from '../assets/python.webp';
import js from '../assets/js.png';
import c from '../assets/c.svg';
import sql from '../assets/sql.jpeg';
import html from '../assets/html.jpeg';
import css from '../assets/css.png';
import php from '../assets/php.png';
import xml from '../assets/xml.png';


import angular from '../assets/angular.jpeg';
import react from '../assets/react.svg';
import aws from '../assets/aws.png';
import git from '../assets/git.png';
import bootstrap from '../assets/bootstrap.png';
import selenium from '../assets/selenium.png';
import azure from '../assets/azure.png';


import awsccp from '../assets/awsccp.png';
// Import other skill icons

const About = () => {
  // Define an array of skills with their corresponding icons
  const skills = [
    { name: 'C++', icon: cpp },
    { name: 'Java', icon: java },
    { name: 'Python', icon: python },
    { name: 'Javascript', icon: js },
    { name: 'C#', icon: c },
    { name: 'SQL', icon: sql },
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'PHP', icon: php },
    { name: 'XML', icon: xml },
    // Add more skills with their icons here
  ];

  const frameworks = [
    { name: 'Angular', icon: angular },
    { name: 'React', icon: react },
    { name: 'AWS', icon: aws },
    { name: 'GIT', icon: git },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'Selenium', icon: selenium },
    { name: 'Azure', icon: azure },
    // Add more skills with their icons here
  ];


  const certifications = [
    { name: 'awsccp', icon: awsccp },
    // Add more skills with their icons here
  ];


  return (
    <div className="about-container">
      {/* Short Bio */}
      <div className="bio">
        <h2 className='heading'>About Me</h2>
        <h4>Seasoned software engineer renowned for exceptional problem-solving abilities. With a Master's degree in Computer Science and a strong background in both frontend and backend development, I bring a unique blend of technical expertise and analytical prowess to every project. From optimizing algorithms to crafting elegant solutions, my dedication to problem-solving excellence drives success in every endeavor.</h4>
      </div>
      
    <div className='line'></div>
      {/* Skills Section */}
      <div className="skills-section">
        <h2 className='heading'>Skills</h2>
        <div className="skill-cards">
          {/* Map over the skills array to generate skill cards */}
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <h3 className='skill-name'>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

    <div className='line'></div>
      <div className="frameworks-section">
        <h2 className='heading'>Frameworks</h2>
        <div className="skill-cards">
          {/* Map over the skills array to generate skill cards */}
          {frameworks.map((framework, index) => (
            <div key={index} className="skill-card">
              <img src={framework.icon} alt={framework.name} className="skill-icon" />
              <h3 className='skill-name'>{framework.name}</h3>
            </div>
          ))}
        </div>
      </div>


      <div className='line'></div>
      <div className="certifications-section">
        <h2 className='heading'>Frameworks</h2>
        <div className="skill-cards">
          {/* Map over the skills array to generate skill cards */}
          {certifications.map((certification, index) => (
            <div key={index} className="skill-card">
              <img src={certification.icon} alt={certification.name} className="skill-icon" />
              <h3 className='skill-name'>{certification.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
