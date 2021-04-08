import React from 'react';
import '../styles/Header.css';
import profileImg from '../images/profile.png';

export default function Header() {
  return (
    <header className="header">
      <p className="Bookstore-CMS">Bookstore CMS</p>
      <p className="BOOKS">BOOKS</p>
      <p className="CATEGORIES">CATEGORIES</p>
      <div className="user-profile">
        <img src={profileImg} alt="user-profile" />
      </div>
    </header>
  );
}
