import React,{Component} from 'react';

export default class Submit extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = ()=> {
        this.props.history.push('/');
    }

    render() {
        const {match,location} = this.props;
        
        const id = match.params.id;
        let search = null;
        
        if(location.search) {
            search = new URLSearchParams(location.search).get('name');
            console.log(search);
        }
        
        return (
            <div>
                <label>
                    Submit!!
                </label>
                <br/>
                <button onClick={this.handleSubmit}>Submit - {id}</button>
                {search && <h1>{search}</h1>}
            </div>
        )
    }

}

