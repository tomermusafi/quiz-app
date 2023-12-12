export type TAnswer = {
    id: number
    answer: string
    isCorrectAnswer: boolean
    isSelected?: boolean
}

export type TQuestion = {
    id: number
    question: string
    answers: TAnswer[]
    isAnswered?: boolean
}

export type TQuiz = {
    id: number
    questions: TQuestion[]
}