import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PageActionCreators from '../actions/separable';

import '../App.css';

import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App({ dispatch, page, words, lang }) {
  const changePage = bindActionCreators(PageActionCreators.changePage, dispatch);
  const changePageFinal = bindActionCreators(PageActionCreators.changePageFinal, dispatch);

  return (
    <div className="main-container">
      <Header
        changePage={changePage}
      />
      <ErrorBoundary>
        <Main
          words={words}
          page={page}
          lang={lang}
          changePageFinal={changePageFinal}
        />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    words: state.words,
    page: state.page,
    lang: state.lang,
  }
);

export default connect(mapStateToProps)(App);
