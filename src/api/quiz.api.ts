import { TQuiz } from "../types/quiz"

const quiz = {
    id: 0,
    questions:[
        {
            id: 0,
            question: "1 + 1 = ?",
            answers: [
                {
                    id: 0,
                    answer: "2",
                    isCorrectAnswer: true
                },
                {
                    id: 1,
                    answer: "0",
                    isCorrectAnswer: false
                },
                {
                    id: 2,
                    answer: "3",
                    isCorrectAnswer: false
                },
                {
                    id: 3,
                    answer: "11",
                    isCorrectAnswer: false
                },
            ]
        },
        {
            id: 1,
            question: "10 + 12 = ?",
            answers: [
                {
                    id: 0,
                    answer: "24",
                    isCorrectAnswer: false
                },
                {
                    id: 1,
                    answer: "20",
                    isCorrectAnswer: false
                },
                {
                    id: 2,
                    answer: "22",
                    isCorrectAnswer: true
                },
                {
                    id: 3,
                    answer: "2",
                    isCorrectAnswer: false
                },
            ]
        },
        {
            id: 2,
            question: "5 - 1 = ?",
            answers: [
                {
                    id: 0,
                    answer: "2",
                    isCorrectAnswer: false
                },
                {
                    id: 1,
                    answer: "5",
                    isCorrectAnswer: false
                },
                {
                    id: 2,
                    answer: "0",
                    isCorrectAnswer: false
                },
                {
                    id: 3,
                    answer: "4",
                    isCorrectAnswer: true
                },
            ]
        },
        {
            id: 3,
            question: "80 + 5 = ?",
            answers: [
                {
                    id: 0,
                    answer: "55",
                    isCorrectAnswer: false
                },
                {
                    id: 1,
                    answer: "75",
                    isCorrectAnswer: false
                },
                {
                    id: 2,
                    answer: "85",
                    isCorrectAnswer: true
                },
                {
                    id: 3,
                    answer: "12",
                    isCorrectAnswer: false
                },
            ]
        },
        {
            id: 4,
            question: "23 - 23 = ?",
            answers: [
                {
                    id: 0,
                    answer: "0",
                    isCorrectAnswer: true
                },
                {
                    id: 1,
                    answer: "2",
                    isCorrectAnswer: false
                },
                {
                    id: 2,
                    answer: "10",
                    isCorrectAnswer: false
                },
                {
                    id: 3,
                    answer: "-1",
                    isCorrectAnswer: false
                },
            ]
        },
    ]
}
export function getQuiz(){
    return quiz as TQuiz
}