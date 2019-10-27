import React from 'react';

const Final = ({ answerList }) => {
  const answers = answerList.map((answer) => (
    <li key={answer.id}>
      {`${answer.infinitive} - ${answer.english}`}
    </li>
  ));

  return (
    <section>
      <h1>Correct Answers</h1>

      <ul className="final-box">
        {answers}
      </ul>
    </section>
  );
};

export default Final;
