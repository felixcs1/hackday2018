import React from 'react';
import {Button, Fade} from 'reactstrap';
import QuestionForm from './question-form';

export default class QuestionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fadeIn: true};
        this.toggle = this.toggle.bind(this)
        this.saveData = this.saveData.bind(this)
        console.log('HELLO');
    }

    render() {
        return (
            <div>
                <div className={"questions-container"}>
                    <QuestionForm id={1}></QuestionForm>
                    <QuestionForm id={2}></QuestionForm>
                    <QuestionForm id={3}></QuestionForm>
                </div>
                <Button color="danger">Cancel</Button>
                <Button color="success" onClick={this.saveData}>Save</Button>
            </div>
        );
    }

    saveData() {
        document.querySelectorAll(".question-text")
            .forEach((question, i) => {
            console.log('Question', i+1, ': ', question.value);
            fetch(`http://localhost:3000/questions/${i+1}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"id": `${i+1}`, "question-text": `${question.value}`, "answers": ["yes","no"]})
            })
                .then(response => response.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', JSON.stringify(response)));
        });
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};