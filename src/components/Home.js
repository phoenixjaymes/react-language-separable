import React from 'react';

const Home = ({ changePage }) => (
  <section>
    <h1 className="text-center">Separable Verbs</h1>

    <dl>
      <dt>Separable verb</dt>
      <dd>A separable verb is a verb that is composed of a lexical core and a separable particle.</dd>
    </dl>

    <p>
      In German, Dutch, and Afrikaans some verbs separate into two parts when used in present tense.
    </p>

    <p>
      Here is your chance to test your knowledge of separable verbs.
      You will be given 20 words to complete.
      Any incorrect words will be added to the end of the list of words.
      You will keep getting words until you answer all words correctly.
    </p>

    <div className="hero-buttons">
      <button type="button" onClick={() => changePage('de')}>German Verbs</button>
    </div>
  </section>
);

export default Home;
