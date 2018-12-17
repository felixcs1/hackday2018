import React from 'react';
import {FormGroup, Label, Input, Fade} from 'reactstrap';

export default class AnswerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.questionText}</div>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name={`radio-${this.props.questionId}`} />{' '}
                        This is a radio button
                    </Label>
                </FormGroup>
            </div>
        );
    }


    // toggle() {
    //     this.setState({
    //         fadeIn: !this.state.fadeIn
    //     });
    // }
};
