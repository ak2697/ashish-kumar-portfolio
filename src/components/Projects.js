import React from 'react';
import './Projects.css'; // Import your CSS file for styling
import GithubImage from '../assets/github.png'; 
const Projects = () => {
  // Array of projects (dummy data)
  const projects = [
    { 
      id: 7, 
      name: 'Fake Review Detection', 
      description: 'This project aims to detect fake reviews in the Yelp dataset, leveraging both traditional machine learning algorithms and advanced deep learning techniques. It addresses the critical issue of trust in online review platforms by developing a robust classification system to distinguish between genuine and fake reviews.',
      image: GithubImage, // Add image URL for Project 2
      skills: 'Python · Machine Lerning   ·   Data Analysis  ·    Data Visualization ',
      githubLink: 'https://github.com/ak2697/CSE-573-Fake-Reviews-Detection'
    },

    { 
      id: 8, 
      name: 'ASU Quiz Generator', 
      description: 'This website was developed to convert questions to QTI format for automating the process of uploading questions on Canvas.',
      image: GithubImage, // Add image URL for Project 2
      skills: 'Javascript · HTML   ·   CSS  ·    File Handling ',
      githubLink: 'https://ak2697.github.io/ASUQuizGenerator/'
    },
    { 
      id: 9, 
      name: 'Fit Fusion', 
      description: 'The Fitness and Workouts Optimization App is a mobile application that leverages wearable technology and real-time health data to personalize workouts.',
      image: GithubImage, // Add image URL for Project 2
      skills: 'Android · Tizen  ·   Java  ·    XML  ·    Shared Preferences    ·    Firebase    ·   OAuth   ·     Realtime Database',
      githubLink: 'https://ak2697.github.io/ASUQuizGenerator/' // Add GitHub link for Project 2
    },
    { 
      id: 1, 
      name: 'Amps - A chatbot', 
      description: 'This is a windows tray application which was integrated with chatterbot and trained with NLP. The chatbot is connected to a database which is accessed using REST API.',
      image: GithubImage, // Add image URL for Project 1
      skills:'Python (Programming Language) · Android Studio · Data Structures',
      githubLink: 'https://github.com/ak2697/amps'
    },


    { 
      id: 4, 
      name: 'Automated Student Attendance with AWS-powered Image Recognition', 
      description: 'An elastic cloud application leveraging Amazon Web Services (AWS) to provide image recognition services to users.',
      image: GithubImage, // Add image URL for Project 2
      skills: 'Amazon Web Services (AWS) · Cloud Computing · Python',
      githubLink: 'https://github.com/ak2697/Automated-Student-Attendance-with-AWS-powered-Image-Recognition'
    },

    { 
      id: 5, 
      name: 'GestureSync Music Control System', 
      description: 'Developed a Python-based gesture recognition system using OpenCV for real-time hand gesture analysis and integrated Spotify API to enable intuitive control of music playback using gestures.',
      image: GithubImage, // Add image URL for Project 2
      skills: 'Python · OpenCV',
      githubLink: 'https://github.com/ak2697/GestureSync-Music-Control-System' 
    },
    { 
      id: 2, 
      name: 'Android Studio Application Development - Like ', 
      description: 'An android application built by using Android Studio and Firebase Database.It is a social app which lets you post,like,comment and delete your activities.      ',
      image: GithubImage, // Add image URL for Project 2
      skills: 'Android Development · Android Studio · Data Structures',
      githubLink: 'https://github.com/ak2697/Like-Android-app' 
    },

    { 
      id: 3, 
      name: 'Android and Python development - Cleanlinise', 
      description: 'An android application that uses open CV to determine the cleanliness of the user’s hand by clicking a photo of it and analyzing it. ',
      image: GithubImage, // Add image URL for Project 2
      skills: 'Python  · Android Development · Android Studio · Data Structures',
      githubLink: 'https://github.com/ak2697/Hand-Hygiene' 
    },
    { 
      id: 6, 
      name: 'Portfolio', 
      description: 'Developed this portfolio using React, HTML and CSS.',
      image: GithubImage, // Add image URL for Project 2
      skills: 'React · HTML   ·   CSS',
      githubLink: 'https://github.com/ak2697/Like-Android-app' // Add GitHub link for Project 2
    },
    

    
    // Add more projects here
  ];

  return (
<div id="projects-section" className="projects-section">
  
  <div className="project-list">
    {/* Map over projects array to generate project cards */}
    {projects.map(project => (
      
      <div key={project.id} className="project-card">
        {/* Project Image */}
        <img src={project.image} alt={project.name} className="project-image" />
        <div className="project-body">
          {/* Project Title */}
          <h2 className='project-name'>{project.name}</h2>
          {/* Project Description */}
          <p className='project-description'>{project.description}</p>
          <p className='project-skills'><b>Skills: </b>{project.skills}</p>
          {/* GitHub Link */}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">View Source Code / Live Demo</a>
          {/* Add more details or links */}

  <div className="line"></div>
        </div>
        
      </div>
      
    ))}
  </div>
</div>

  );
}

export default Projects;
