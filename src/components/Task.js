import React, { Component } from 'react';

import TaskHeader from './TaskHeader';
import WordBox from './WordBox';
import PrefixButtons from './PrefixButtons';
import AnswerButtons from './AnswerButtons';
import AnswerBox from './AnswerBox';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      wordList: this.props.wordList,
      selectedPrefix: '',
      buttonLabel: 'check',
      answer: '',
      answerClass: '',
      answerText: '',
    };
  }

  clearAnswerLast = () => {
    this.setState({
      selectedPrefix: '',
      answer: '',
      answerClass: '',
      answerText: '',
    });
  }

  handleNextClick = () => {
    this.clearAnswerLast();
    this.changeButtonLabel('check');

    this.setState((prevState) => {
      if (prevState.currentIndex < prevState.wordList.length - 1) {
        return { currentIndex: prevState.currentIndex + 1 };
      }
      return { currentIndex: prevState.currentIndex };
    });
  }

  handleCheckClick = () => {
    const { currentIndex, wordList, selectedPrefix } = this.state;

    if (selectedPrefix === '') {
      return;
    }

    this.checkAnswer();

    if (currentIndex < wordList.length - 1) {
      this.changeButtonLabel('next');
    } else {
      this.changeButtonLabel('finish');
    }
  }

  checkAnswer = () => {
    const { currentIndex, selectedPrefix, wordList } = this.state;
    const { word, answer } = wordList[currentIndex];
    const providedAnswer = `${selectedPrefix}${word}`;
    const tempWordList = wordList;

    if (answer === providedAnswer) {
      this.setState({
        answerClass: 'answer-correct',
        answerText: 'Your answer is correct',
        answer,
      });

      return true;
    }

    tempWordList.push(wordList[currentIndex]);

    this.setState({
      wordList: tempWordList,
      answerClass: 'answer-incorrect',
      answerText: 'The correct answer is',
      answer,
    });

    return false;
  }

  handleFinishClick = () => {
    // goto final page
    console.log('going to final page');
  }

  changeButtonLabel = (buttonLabel) => {
    const buttonLabelNames = ['check', 'next', 'continue'];
    this.setState({ buttonLabel });
  }

  handlePrefixClick = (selectedPrefix) => {
    this.setState({ selectedPrefix });
  }

  render() {
    const {
      wordList, currentIndex, selectedPrefix, buttonLabel, answer, answerText, answerClass,
    } = this.state;
    const { language } = this.props;

    return (
      <section>
        <TaskHeader
          language={language}
        />

        <WordBox
          english={wordList[currentIndex].english}
          word={wordList[currentIndex].word}
          selectedPrefix={selectedPrefix}
        />

        <PrefixButtons
          prefixes={wordList[currentIndex].prefixes}
          handlePrefixClick={this.handlePrefixClick}
        />

        <AnswerButtons
          buttonLabel={buttonLabel}
          handleCheckClick={this.handleCheckClick}
          handleNextClick={this.handleNextClick}
          handleFinishClick={this.handleFinishClick}
        />

        <AnswerBox
          answerClass={answerClass}
          answer={answer}
          answerText={answerText}
        />

      </section>
    );
  }
}

export default Task;
