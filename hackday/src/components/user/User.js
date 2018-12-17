import React, {Component} from 'react';
import AnswerContainer from './answer-container';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {result: { data: []}};
        this.renderData = this.renderData.bind(this)
    }

    componentWillMount() {
        fetch("http://localhost:3000/questions")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        result: { data: result }
                    });
                })
    }

    renderData() {
        const { data } = this.state.result;

        return data.map((item) => {
            return(
                <AnswerContainer
                    questionText={item.questionText}
                    questionId={item.id}
                    questionAnswers={item.answers}
                    rawData={this.state.result}
                />
            );
        });
    }



    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        )
    }
}

export default User;
