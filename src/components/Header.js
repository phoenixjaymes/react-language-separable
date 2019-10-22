import React from 'react';

const Header = ({ changePage }) => (
  <header>
    <div className="inner-container">
      <p>Separable Verbs</p>
      <nav>
        <ul>
          <li><button type="button" onClick={() => changePage('home')}>Home</button></li>
          <li><button type="button" onClick={() => changePage('de')}>German</button></li>
          <li><button type="button" onClick={() => changePage('nl')}>Dutch</button></li>
          <li><button type="button" onClick={() => changePage('za')}>Afrikaans</button></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
