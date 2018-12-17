import React from 'react';
import {FormGroup, Label, Input, Fade, Button, ButtonGroup} from 'reactstrap';
import './answer-container.css';

export default class AnswerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="answer-container">
                <h3>{this.props.questionText}</h3>
                <ButtonGroup>
                    {this.props.questionAnswers.map(
                        (ans) => {
                            return this.makeAnswer(this.props.questionId, ans)
                        }
                    )}
                </ButtonGroup>
            </div>
        );
    }

    makeAnswer(questionId, ans) {
        const col = ans.answerText === "yes" ? "success" : "danger";
        return (
            <div>
                <Button
                    color={col}
                    name={`${questionId}`}
                    onClick={(event, value) => this.submitAnswer(event)}
                >
                    {ans.answerText}
                </Button>
            </div>
        );
    }

    submitAnswer(event) {
        console.log(event)
    }
};
