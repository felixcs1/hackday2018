import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Container } from 'reactstrap';

export default class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        console.log('HELLO');
    }

    render() {
        return (
            <Container>
                <div>
                    <Form className="question" id={`myform-${this.props.id}`}>
                        <FormGroup id={`question-${this.props.id}`} row>
                            <Label for="exampleEmail" sm={2}>Question</Label>
                            <Col sm={10}>
                                <Input type="text" name="text" className="question-text" placeholder="Enter a question" sm={12}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Image</Label>
                            <Col sm={10}>
                                <Input type="file" name="file" className="question-image" id="exampleFile" sm={12} />
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </Container>

        );
    }
};