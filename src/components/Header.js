import React from 'react';

const Header = ({ page, changePage }) => {
  const pages = [
    { id: 'home', name: 'Home' },
    { id: 'de', name: 'German' },
    { id: 'nl', name: 'Dutch' },
    { id: 'za', name: 'Afrikaans' },
  ];

  const buttons = pages.map((pageItem) => (
    <li key={pageItem.id}>
      <button
        className={page === pageItem.id ? 'active' : ''}
        type="button"
        onClick={() => changePage(pageItem.id)}
      >
        {pageItem.name}
      </button>
    </li>
  ));

  return (
    <header>
      <div className="inner-container">
        <p>Separable Verbs</p>
        <nav>
          <ul>
            {buttons}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
