import React,{Component} from 'react';

export default class MediaItem extends Component {
    constructor(){
        super();
    }
    
    render(){
        
        const {img,name,category,format} = this.props;
        
        return (
            <div id="mediaItem"> 
                <div className="imageCont">
                    <span className="mediaImage" style={{backgroundImage: `url(${img})`}}></span>
                </div>
    
                <label className="mediaName">{name}</label>
                <label className="mediaCategory">{category}</label>
                <label className="mediaFormat">{format}</label>
            </div>  
        );
    }
}