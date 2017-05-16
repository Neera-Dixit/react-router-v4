import React,{Component} from 'react';
import SidebarNav from './sidebarNav';
import MediaItemContainer from './media/mediaItemContainer';

export default class ContentContainer extends Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div id="content">
                <SidebarNav />
                <MediaItemContainer />
            </div>  
        );
    }
}