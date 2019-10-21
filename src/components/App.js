import React from 'react';
import { connect } from 'react-redux';

import '../App.css';

import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import separable from '../data/separable';

function App() {
  const { page, words } = separable;

  return (
    <div className="main-container">
      <Header />
      <ErrorBoundary>
        <Main
          words={words}
          page={page}
        />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
