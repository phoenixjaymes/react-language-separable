import React from 'react';

const AnswerButtons = ({
  buttonLabel, handleCheckClick, handleNextClick, handleFinishClick,
}) => {
  let buttonToUse;

  if (buttonLabel === 'check') {
    buttonToUse = <button className="btn-check" type="button" onClick={() => handleCheckClick()}>{buttonLabel}</button>;
  } else if (buttonLabel === 'next') {
    buttonToUse = <button className="btn-check" type="button" onClick={() => handleNextClick()}>{buttonLabel}</button>;
  } else if (buttonLabel === 'finish') {
    buttonToUse = <button className="btn-check" type="button" onClick={() => handleFinishClick()}>{buttonLabel}</button>;
  }

  return (
    <div className="answer-buttons-box">
      {buttonToUse}
    </div>
  );
};

export default AnswerButtons;
