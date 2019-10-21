const separable = {
  page: 'final',
  lang: '',
  words: {
    de: {
      wordList: [
        {
          id: 1,
          word: 'kommen',
          english: 'to arrive',
          answer: 'ankommen',
          prefixes: [
            { id: 1, name: 'an' },
            { id: 2, name: 'mit' },
            { id: 3, name: 'zurück' },
          ],
        },
        {
          id: 2,
          word: 'kommen',
          english: 'to come along',
          answer: 'mitkommen',
          prefixes: [
            { id: 1, name: 'mit' },
            { id: 2, name: 'an' },
            { id: 3, name: 'zurück' },
          ],
        },
        {
          id: 3,
          word: 'kommen',
          english: 'to come back',
          answer: 'zurückkommen',
          prefixes: [
            { id: 1, name: 'mit' },
            { id: 2, name: 'zurück' },
            { id: 3, name: 'an' },
          ],
        },
        {
          id: 4,
          word: 'kommen',
          english: 'to come later',
          answer: 'nachkommen',
          prefixes: [
            { id: 1, name: 'mit' },
            { id: 2, name: 'zurück' },
            { id: 3, name: 'nach' },
          ],
        },
      ],
      answerList: [
        { id: 1, english: 'to arrive', infinitive: 'ankommen' },
        { id: 2, english: 'to come along', infinitive: 'mitkommen' },
        { id: 3, english: 'to come back', infinitive: 'zurückkommen' },
        { id: 4, english: 'to come later', infinitive: 'nachkommen' },
      ],
    },
    nl: {
      wordList: [
        {
          id: 1,
          word: 'keuren',
          english: 'to reject',
          prefixes: [
            { id: 1, name: 'af' },
            { id: 2, name: 'los' },
            { id: 3, name: 'op' },
          ],
          answer: 'afkeuren',
        },
        {
          id: 2,
          word: 'keuren',
          english: 'to approve',
          prefixes: [
            { id: 1, name: 'goed' },
            { id: 2, name: 'los' },
            { id: 3, name: 'op' },
          ],
          answer: 'goedkeuren',
        },
        {
          id: 3,
          word: 'geven',
          english: 'to give up',
          prefixes: [
            { id: 1, name: 'af' },
            { id: 2, name: 'los' },
            { id: 3, name: 'op' },
          ],
          answer: 'opgeven',
        },
      ],
      answerList: [
        { id: 1, english: 'to reject', infinitive: 'afkeuren' },
        { id: 1, english: 'to approve', infinitive: 'goedkeuren' },
        { id: 1, english: 'to give up', infinitive: 'opgeven' },
      ],
    },
    za: {
      wordList: [
        {
          id: 1,
          word: 'kommen',
          english: 'to arrive',
          prefixes: [
            { id: 1, name: 'an' },
            { id: 2, name: 'mit' },
            { id: 3, name: 'zurück' },
          ],
          answer: 'ankommen',
        },
        {
          id: 2,
          word: 'kommen',
          english: 'to come along',
          prefixes: [
            { id: 1, name: 'an' },
            { id: 2, name: 'mit' },
            { id: 3, name: 'zurück' },
          ],
          answer: 'mitkommen',
        },
        {
          id: 3,
          word: 'kommen',
          english: 'to come back',
          prefixes: [
            { id: 1, name: 'an' },
            { id: 2, name: 'mit' },
            { id: 3, name: 'zurück' },
          ],
          answer: 'zurückkommen',
        },
      ],
      answerList: [
        { id: 1, english: 'to arrive', infinitive: 'ankommen' },
        { id: 1, english: 'to come along', infinitive: 'mitkommen' },
        { id: 1, english: 'to come back', infinitive: 'zuückkommen' },
      ],
    },
  },
};

export default separable;
