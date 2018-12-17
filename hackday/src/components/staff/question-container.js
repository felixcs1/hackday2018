import React from 'react';
import {Button, Fade} from 'reactstrap';
import QuestionForm from './question-form';

export default class QuestionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fadeIn: true};
        this.toggle = this.toggle.bind(this)
        this.saveData = this.saveData.bind(this)
    }

    render() {
        return (
            <div>
                <div className={"questions-container"}>
                    <h3>Question 1</h3>
                    <QuestionForm id={1}></QuestionForm>
                    <hr/>
                    <h3>Question 2</h3>
                    <QuestionForm id={2}></QuestionForm>
                    <hr/>
                    <h3>Question 3</h3>
                    <QuestionForm id={3}></QuestionForm>
                </div>
                <Button color="danger">Cancel</Button>
                <Button color="success" onClick={this.saveData}>Save</Button>
            </div>
        );
    }

    saveData() {
        document.querySelectorAll(".question")
            .forEach((question, i) => {
            console.log('Question', i+1, ': ', question);
            const questionText = question.querySelector('.question-text');
            const imageURL = question.querySelector('.question-image');
            fetch(`http://localhost:3000/questions/${i+1}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"id": `${i+1}`, "questionText": `${questionText.value}`, "imageURL": `${imageURL.value.split('\\')[imageURL.value.split('\\').length - 1]}`, "answers": [{"answerText":"yes", "numberOfVotes": "0"},
                        {"answerText":"no", "numberOfVotes": "0"}]})
            })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));
        });

       // document.querySelectorAll(".question-image")
       //     .forEach((imageURL, i) => {
       //         fetch(`http://localhost:3000/questions/${i + 1}`, {
       //             method: 'PUT',
       //             headers: {
       //                 "Content-Type": "application/json"
       //             },
       //             body: JSON.stringify({"imageURL": `${imageURL.value.split('\\')[imageURL.value.split('\\').length - 1]}`})
       //         })
       //         .then(response => response.json())
       //         .catch(error => console.error('Error:', error))
       //         .then(response => console.log('Success:', JSON.stringify(response)));
       //     });
    }


    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};