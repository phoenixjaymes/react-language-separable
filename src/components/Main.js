import React from 'react';

import Task from './Task';
import Home from './Home';
import Final from './Final';


const Main = ({ words, page }) => {

  let pageComponent;

  if (page === 'home') {
    pageComponent = <Home />;
  } else if (page === 'final') {
    pageComponent = <Final answerList={words.de.answerList} />;
  } else if (
    page === 'de'
    || page === 'nl'
    || page === 'za'
  ) {
    pageComponent = (
      <Task
        wordList={words[page].wordList}
        language={page}
      />
    );
  }

  return (
    <main>
      <div className="inner-container">
        {pageComponent}
      </div>
    </main>
  );
};

export default Main;
