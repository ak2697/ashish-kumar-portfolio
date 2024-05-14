import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar">
      <NavLink
        to="/about"
        className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
        onClick={() => handleTabClick('about')}
      >
        <strong>About</strong>
      </NavLink>
      <NavLink
        to="/ak"
        className={`nav-item ${activeTab === 'ak' ? 'active bigger' : ''}`}
        onClick={() => handleTabClick('ak')}
      >
        <strong>AK</strong>
      </NavLink>
      <NavLink
        to="/projects"
        className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
        onClick={() => handleTabClick('projects')}
      >
        <strong>Projects</strong>
      </NavLink>
    </div>
  );
};

export default NavBar;
