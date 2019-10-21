import React from 'react';

const WordBox = ({ english, word, selectedPrefix }) => (
  <div className="word-box">
    <div>
      <p>{english}</p>
      <span className="word-word-box__prefix">{selectedPrefix}</span>
      <span className="word-box__word">{word}</span>
    </div>
  </div>
);

export default WordBox;
