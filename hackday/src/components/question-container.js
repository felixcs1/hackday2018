import React from 'react';
import { Button, Fade } from 'reactstrap';
import QuestionForm from './question-form';

export default class QuestionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this)
        console.log('HELLO');
    }

    render() {
        return (
            <div>
                <QuestionForm></QuestionForm>
                <QuestionForm></QuestionForm>
                <QuestionForm></QuestionForm>

                <Button color="danger">Cancel</Button>
                <Button color="success">Save</Button>
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};