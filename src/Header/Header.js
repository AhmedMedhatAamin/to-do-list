import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import immagine from './ac11aa2add3b0193c8769e0a17d13535.jpg'; // Corrected import

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Toodledo</h1>
      </div>
      <div className="menu-display">
        <div className="search-bar" aria-label="Search">
          <FaSearch />
        </div>
        <div className="actions">
          <button className="add-task-btn">+ ADD TASK</button>
        </div>
        <div className="profile-icon">
          <img src={immagine} alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
