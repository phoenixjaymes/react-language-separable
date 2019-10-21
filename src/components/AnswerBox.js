import React from 'react';

const AnswerBox = ({ answerClass, answerText, answer}) => (
  <div className={`answer-box ${answerClass}`}>
    {answerText}
    <br />
    {answer}
  </div>
);

export default AnswerBox;
