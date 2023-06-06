import { Component } from "react";
import { QuestionModel } from "../models/QuestionModel";

export default class Question extends Component<{question: QuestionModel, questionIndex:number, numberOfQuestions:number, onAnswer: (isCorrect: Boolean) => void}> {
    render() {
        return <div className='question-section-wrapper'>
        <span className='progress-text' style={{color: this.props.question.questionColor.toString()}}>შეკითხვა {this.props.questionIndex + 1}/{this.props.numberOfQuestions} </span>
        <span className='question-text' style={{color: this.props.question.questionColor.toString()}}>{this.props.question.text}</span>

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