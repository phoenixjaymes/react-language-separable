import React from 'react';

const TaskHeader = ({ language }) => {
  let fullName;

  if (language === 'de') {
    fullName = 'German';
  } else if (language === 'nl') {
    fullName = 'Dutch';
  } else if (language === 'za') {
    fullName = 'AAfrikaans';
  } else {
    fullName = 'Unknown';
  }

  return (
    <h1 className="center-text">{`${fullName} Separable Verbs`}</h1>
  );
};

export default TaskHeader;
