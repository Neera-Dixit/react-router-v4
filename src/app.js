import React,{Component} from 'react';
import {BrowserRouter as Router,HashRouter,MemoryRouter,StaticRouter,NativeRouter,Route,NavLink,Switch,Redirect,Prompt} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Submit from './components/submit';

const history = createBrowserHistory();

const Home = (props) => {
    console.log('props');
    return (<div>
        <h1>Hello World!!!</h1>
    </div>);
    
};

/* nested routes */
const aboutus = (props) => {
    console.log('props');
    return (<div>
        <h1>Hello World!!!</h1>
        <ul>
            <li><NavLink exact activeClassName="selected" to="/abouts/oldhome">Old Home</NavLink></li>
            <li><NavLink activeClassName="selected" to="/abouts/newhome">New Home</NavLink></li>
        </ul>
        <Route path="/abouts/:hometype" render={({match})=><h1>{match.params.hometype}</h1>} />
    </div>);
    
};

const isActive = (match,location) => {
    console.log(match,location);
    return match;
};

const urlParam = (param) => {
    console.log(param)
    return <h1>{param.match.params.id}</h1>
}

class Reviews extends Component {
    constructor(props){
        super(props);
        this.state = {isDirty : false};
    }
    
    setDirty = ()=> {
        this.setState({isDirty:true})
    }
    
    render(){
        return (
            <div>
                <input type="text" onInput={this.setDirty} />
            <Prompt when={this.state.isDirty} message="data will be lost!!" />
            </div>
        );
    }
}

const Links = () => (
    <ul>
        <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="selected" to="/reviews">Reviews</NavLink></li>
        <li><NavLink activeClassName="selected" to="/abouts">abouts</NavLink></li>
        <li><NavLink activeClassName="selected" to="/careerpage">old career page</NavLink></li>
        <li><NavLink activeClassName="selected" to="/protected">protected</NavLink></li>
        <li><NavLink activeStyle={{color:'orange'}} to={{pathname : '/about'}}>Aboutus</NavLink></li>
        <li><NavLink isActive={isActive} activeClassName="selected" replace to="/careers">Careers</NavLink></li>
        <li><NavLink activeClassName="selected"to="/12">id</NavLink></li>
        <li><NavLink activeClassName="selected" to="/12345?name=neeraj">query param</NavLink></li>
        <li><NavLink activeClassName="selected" to="/ddhnzjjsjs/ddd">not found</NavLink></li>
    </ul>
);

const isLoggedIn = true;
    
const app = () => (
    
    <Router history={history}>
        <div>
            <Links />
            {/* exact check only for the start , strict checs for the end of url* children will be executed for all the routes,() in router path is for regex */}
        <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/abouts" component={aboutus} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/protected" render={()=> isLoggedIn? <h1>welcome user</h1> : <Redirect to="/" />} /> 
            <Route strict path="/about" render={()=><h1>About us</h1>} />
            <Route path="/careers" children={({match})=> match && <h1>Careers</h1>} />
            <Route path="/:id(\d{2})" component={Submit} /> 
            <Redirect from="/careerpage" to="/careers" />
            <Route render={()=><h1>Not found</h1>} />
            {/* <Route path="/:id" component={Submit} /> */}
        </Switch>
        </div>
    </Router>
);

export default app;