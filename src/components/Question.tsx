import { Component } from "react";
import { QuestionModel } from "../models/QuestionModel";

//({question: QuestionModel, questionIndex:number, numberOfQuestions:number})
export default class Question extends Component<{question: QuestionModel, questionIndex:number, numberOfQuestions:number, onAnswer: (isCorrect: Boolean) => void}> {
    render() {
        return <div className='question-section-wrapper'>
        <span className='progress-text'>Question {this.props.questionIndex + 1} of {this.props.numberOfQuestions} </span>
        <span className='question-text'>{this.props.question.text}</span>

        <ul className='answers-wrapper'>
            {
                this.props.question.options.map(answer => {
                    return <li key={answer.id} onClick={() => {
                        this.props.onAnswer(answer.isCorrect)
                    }}>{answer.text}</li>;
                })
            }
        </ul>
    </div>;
    }
}