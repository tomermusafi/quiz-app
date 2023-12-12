import { TAnswer } from "../types/quiz";

export function Answer({
  answer,
  questionId,
  selectAnswer,
}: {
  answer: TAnswer;
  questionId: number;
  selectAnswer: (questionId: number, answerId: number) => void;
}) {
  return (
    <div
      onClick={() => selectAnswer(questionId, answer.id)}
      className={answer.isSelected ? "selectedAnswer" : "answer"}
    >
      {answer.answer}
    </div>
  );
}
