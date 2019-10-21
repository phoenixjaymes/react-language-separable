import React from 'react';

const Final = ({ answerList }) => {
  const answers = answerList.map((answer) => (
    <li key={answer.id}>
      {`${answer.infinitive} - ${answer.english}`}
    </li>
  ));

  return (
    <section>
      <h1>Here are all of the correct answers</h1>

      <ul className="final-box">
        {answers}
      </ul>
    </section>
  );
};

export default Final;
