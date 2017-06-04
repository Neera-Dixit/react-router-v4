import React,{Component} from 'react';
import "./app.css";
import Home from './home';
import Submit from './submit';
import {Navbar,Nav,MenuItem,NavItem,NavDropdown} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Redirect
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){ 
       return (
               <Router history={history}>
                   <div>
                       <nav className="navbar navbar-default">
                           <div className="container-fluid">
                               <div className="navbar-header">
                                   <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                       <span className="sr-only">Toggle navigation</span>
                                       <span className="icon-bar"></span>
                                       <span className="icon-bar"></span>
                                       <span className="icon-bar"></span>
                                   </button>
                                   <a className="navbar-brand" href="#">Brand</a>
                               </div>

                               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                   <ul className="nav navbar-nav">
                                       <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
                                       <li><NavLink activeClassName="selected" to="/submit">Submit Recepie</NavLink></li>
                                   </ul>

                               </div>
                           </div>
                       </nav>

                       <Route exact path="/" component={Home}/>
                       <Route path="/submit" component={Submit}/>
                   </div>
               </Router>
        )
    }
}