import React from 'react';
import {FormGroup, Label, Input, Fade} from 'reactstrap';
import './answer-container.css';

export default class AnswerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="answer-container">
                <div>{this.props.questionText}</div>
                <FormGroup>
                    {this.props.questionAnswers.map(
                        (ans) => { return this.makeAnswer(this.props.questionId, ans) }
                    )}
                </FormGroup>
            </div>
        );
    }

    makeAnswer(questionId, answerText) {
        return (
            <FormGroup check>
                <Label check>
                    <Input type="radio" name={`radio-${questionId}`}/>{' '}
                    {answerText}
                </Label>
            </FormGroup>
        );
    }
};
