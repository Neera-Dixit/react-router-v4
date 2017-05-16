import React,{Component} from 'react';


export default class MediaItemHeader extends Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div id ="mediaListHeader"> 
                <label>Image</label>
                <label>Image Name</label>
                <label>Image Category</label>
                <label>Image Format</label>
            </div>  
        );
    }
}