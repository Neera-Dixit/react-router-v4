import React,{Component} from 'react';
import Header from './header';
import ContentContainer from './content/index';
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
                <ContentContainer/>
                <Footer/>
            </div>  
        );
    }
}