import React,{Component} from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import appCss from '../../public/css/app';

export default class Container extends Component {
    constructor(){
        super();
    }
    
    render(){
        return (
           <div id="container">
                <Header/>
                <Content/>
                <Footer/>
            </div>  
        );
    }
}