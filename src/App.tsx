import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuiz } from "./api/quiz.api";
import { TQuiz } from "./types/quiz";
import { Question } from "./components/question";
import { Score } from "./components/score";

function App() {
  const [quiz, setQuiz] = useState<TQuiz | undefined>(undefined);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuiz(getQuiz());
  }, []);

  if (!quiz) return null;
  const currentQuestion = quiz.questions[currentQuestionId];
  const quizSize = quiz.questions.length;

  const showScoreOnSubmit = () => {
    let totalScore = 0;
    quiz.questions.forEach((question) => {
      if (
        question.answers.some(
          (answer) => answer.isCorrectAnswer && answer.isSelected
        )
      ) {
        totalScore += 100 / quizSize;
      }
    });
    setScore(totalScore);
    setShowScore(true); // Add this line to show the score after calculation
  };

  const selectAnswer = (questionId: number, answerId: number) => {
    setQuiz((prevQuiz: TQuiz | undefined) => {
      if (!prevQuiz) return prevQuiz;

      const updatedQuiz: TQuiz = {
        ...prevQuiz,
        questions: [...prevQuiz.questions],
      };

      updatedQuiz.questions[questionId] = {
        ...updatedQuiz.questions[questionId],
        isAnswered: true,
        answers: (updatedQuiz.questions[questionId].answers || []).map(
          (answer) => ({
            ...answer,
            isSelected: false,
          })
        ),
      };

      updatedQuiz.questions[questionId].answers[answerId].isSelected = true;

      return updatedQuiz;
    });
  };

  return (
    <div className="quiz">
      {!showScore ? (
        <div>
          <Question
            question={currentQuestion}
            selectAnswer={selectAnswer}
          />
          <div className="button-container">
            {currentQuestionId !== 0 && (
              <button
                onClick={() =>
                  setCurrentQuestionId((prevQuestionId) =>
                    prevQuestionId >= 0 ? prevQuestionId - 1 : prevQuestionId
                  )
                }
              >
                Previous
              </button>
            )}
            <button
              disabled={!currentQuestion.isAnswered}
              onClick={() => {
                currentQuestionId === quizSize - 1
                  ? showScoreOnSubmit()
                  : setCurrentQuestionId((prevQuestionId) =>
                      prevQuestionId < quizSize - 1
                        ? prevQuestionId + 1
                        : prevQuestionId
                    );
              }}
            >
              {currentQuestionId === quizSize - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <Score score={score} />
      )}
    </div>
  );
}

export default App;
