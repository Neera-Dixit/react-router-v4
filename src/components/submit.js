import React,{Component} from 'react';

export default class Submit extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = ()=> {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <label>
                    Submit!!
                </label>
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }

}

