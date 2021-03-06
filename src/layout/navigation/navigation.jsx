import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="logoWrapper">
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-card.png" height="60" alt="logo" />
    </div>
    <nav>
      <ul className="nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/button">Button</NavLink></li>
        <li><NavLink exact to="/buttonGroup">Button Group</NavLink></li>
        <li><NavLink exact to="/icon">Icon</NavLink></li>
        <li><NavLink exact to="/image">Image</NavLink></li>
        <li><NavLink exact to="/chip">Chip</NavLink></li>
        <li><NavLink exact to="/badge">Badge</NavLink></li>
        <li><NavLink exact to="/listGroup">List Group</NavLink></li>
        <li><NavLink exact to="/input">Input</NavLink></li>
        <li><NavLink exact to="/tabBar">Tab bar</NavLink></li>
        <li><NavLink exact to="/tooltip">Tooltip</NavLink></li>
        <li><NavLink exact to="/modal">Modal</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
