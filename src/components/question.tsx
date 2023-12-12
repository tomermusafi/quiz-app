import { TAnswer, TQuestion } from "../types/quiz";
import { Answer } from "./answer";

export function Question({
  question,
  selectAnswer,
}: {
  question: TQuestion;
  selectAnswer: (questionId: number, answerId: number) => void;
}) {
  return (
    <div>
      <p>{question.question}</p>
      {question.answers.length > 0 &&
        question.answers.map((answer: TAnswer) => (
          <Answer
            key={answer.id}
            answer={answer}
            questionId={question.id}
            selectAnswer={selectAnswer}
          />
        ))}
    </div>
  );
}
