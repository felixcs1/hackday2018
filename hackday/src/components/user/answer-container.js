import React from 'react';
import {FormGroup, Label, Input, Fade, Button, ButtonGroup} from 'reactstrap';
import './answer-container.css';

export default class AnswerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.data = {};
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
                    onClick={(event) => this.submitAnswer(questionId, ans.answerText === "yes" ? 0 : 1)}
                >
                    {ans.answerText}
                </Button>
            </div>
        );
    }

    async submitAnswer(questionId, valueId) {
        const data = await fetch(`http://localhost:3000/questions/${questionId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(
                (response) => {
                    this.data = response;
                }
            );


        const answers = this.data.answers;

        console.log(answers)

        const yesVotes = parseInt(answers[0].numberOfVotes);
        const noVotes = parseInt(answers[1].numberOfVotes);



        console.log('yes', yesVotes);
        console.log('no', noVotes);


        const newYes = valueId === 0 ? yesVotes + 1 : yesVotes;
        const newNo = valueId === 1 ? noVotes + 1 : noVotes;

        const totalVotes = newYes + newNo;

        const yesPerc = (newYes / totalVotes) * 100;
        const noPerc = (newNo / totalVotes) * 100;

        fetch(`http://localhost:3000/questions/${questionId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": `${questionId}`,
                "questionText": `${this.data.questionText}`,
                "answers": [
                    {"answerText": "yes", "numberOfVotes": `${newYes}`},
                    {"answerText": "no", "numberOfVotes": `${newNo}`},
                ]
            })
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));






        // console.log(event)
    }
};
