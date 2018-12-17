import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

export default class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        console.log('HELLO');
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Question</Label>
                        <Col sm={10}>
                            <Input type="text" name="text" id="exampleEmail" placeholder="Enter a question" sm={12}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Image</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="exampleFile" sm={12} />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
};