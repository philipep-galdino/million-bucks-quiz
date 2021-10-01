import React, { useState, useEffect } from 'react';

import db from '../../db.json';

import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import LoadingWidget from '../../src/components/LoadingWidget';
import ResultWidget from '../../src/components/ResultWidget';
import QuestionWidget from '../../src/components/QuestionWidget';

export default function QuizPage() {
  const [screenState, setScreenState] = useState('LOADING');
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [failed, setFailed] = useState(false)

  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  function addFail(failure) {
    setFailed(failure)
    setScreenState('FAILED')
  }

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
    if (results[0] === false) {
      setFailed(true)
      setScreenState('RESULT');
    }
    setScreenState('LOADING');
  }

  useEffect(() => {
    let nextQuestion = Math.floor(Math.random() * totalQuestions);

    console.log(screenState)

    if(failed) {
      setScreenState('FAILED')
      nextQuestion = 0
    }

    if (nextQuestion === totalQuestions) {
      setScreenState('RESULT');
    } else {
      setTimeout(() => {
      setScreenState('QUIZ');
      }, 1 * 1000);
    }
  }, [results]);

  function handleSubmitQuiz() {
    let nextQuestion = Math.floor(Math.random() * totalQuestions);

    if(failed) {
      setScreenState('FAILED')
    }

    if (nextQuestion < totalQuestions && failed === false) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState('RESULT');
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {screenState === 'LOADING' && <LoadingWidget />}
        {screenState === 'QUIZ' && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
            addFail={addFail}
          />
        )}
        {screenState === 'FAILED' && <ResultWidget failed={failed} />}
        {screenState === 'RESULT' && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
