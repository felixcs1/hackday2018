import React from 'react';
import {FormGroup, Label, Input, Fade, Button, ButtonGroup, Card, CardTitle, CardImg, CardBody, Container} from 'reactstrap';
import './answer-container.css';

export default class AnswerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.data = {};
        this.state = { answered: false, yes: 0, no: 0 };

        this.submitAnswer = this.submitAnswer.bind(this)
        this.generatePoll = this.generatePoll.bind(this)
    }

    render() {
        const image = process.env.PUBLIC_URL + `/${this.props.questionImage}`;
        return (
            <Container>
                <Card className="answer-container" style={{ backgroundColor: '#262c35', color: 'white'}}>
                    <CardImg src={image} />
                    <CardBody>
                        <CardTitle>{this.props.questionText}</CardTitle>
                        <ButtonGroup>
                            {this.props.questionAnswers.map(
                                (ans) => {
                                    return this.makeAnswer(this.props.questionId, ans)
                                }
                            )}
                        </ButtonGroup>
                        {this.state.answered && this.generatePoll()}
                    </CardBody>
                </Card>
            </Container>
        );
    }

    makeAnswer(questionId, ans) {
        if( ans.answerText === "yes" ) {
            return (
                <div>
                    <Button
                        className="yes-btn"
                        size="lg"
                        name={`${questionId}`}
                        onClick={(event) => this.submitAnswer(questionId, ans.answerText === "yes" ? 0 : 1)}
                    >
                        {ans.answerText}
                    </Button>
                </div>
            );
        }
        return (
            <div>
                <Button
                    className="no-btn"
                    size="lg"
                    name={`${questionId}`}
                    onClick={(event) => this.submitAnswer(questionId, ans.answerText === "yes" ? 0 : 1)}
                >
                    {ans.answerText}
                </Button>
            </div>
        );
    }

    generatePoll() {
        return(
            <div>
                <div className="yes">YES: {this.state.yes.toFixed(0)}%</div>
                <div className="no">NO: {this.state.no.toFixed(0)}%</div>
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

        const yesVotes = parseInt(answers[0].numberOfVotes);
        const noVotes = parseInt(answers[1].numberOfVotes);

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
                "imageURL": `${this.data.imageURL}`,
                "answers": [
                    {"answerText": "yes", "numberOfVotes": `${newYes}`},
                    {"answerText": "no", "numberOfVotes": `${newNo}`},
                ]
            })
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)))
        .then(() => {this.setState({
            answered: true,
            yes: yesPerc,
            no: noPerc,
        })});






    }
};
