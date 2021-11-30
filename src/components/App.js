import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePage, changePageFinal, addWords } from '../actions/separable';

import '../App.css';

import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  componentDidMount() {
    this.fetchVerbs();
  }

  fetchVerbs = () => {
    const { addWords } = this.props;

    fetch('https://phoenixjaymes.com/assets/data/language/separables/')
      .then((reponse) => reponse.json())
      .then((responseData) => {
        sessionStorage.setItem('separableWords', JSON.stringify(responseData.data.words));

        addWords(responseData.data.words);

        this.setState({
          loading: false,
        });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);

        this.setState({
          loading: false,
          error: true,
        });
      });
  }

  render() {
    const { page, words, lang, changePage, changePageFinal } = this.props;

    return (
      <div className="main-container">
        <Header
          page={page}
          changePage={changePage}
        />
        <ErrorBoundary>
          <Main
            words={words}
            page={page}
            lang={lang}
            changePage={changePage}
            changePageFinal={changePageFinal}
          />
        </ErrorBoundary>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    words: state.words,
    page: state.page,
    lang: state.lang,
  }
);

const mapDispatchToProps = {
  changePage,
  changePageFinal,
  addWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
