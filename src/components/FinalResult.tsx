import { Component } from "react";

export default class FinalResult extends Component<{ score: number, questionsCount: number, onRestartHandler: () => void }>{
    render() {
        return <div className='final-results-wrapper'>
            <h1>Final Results</h1>
            <h2>{this.props.score}</h2>
            <button onClick={this.props.onRestartHandler}>Restart game</button>
        </div>;
    }
}