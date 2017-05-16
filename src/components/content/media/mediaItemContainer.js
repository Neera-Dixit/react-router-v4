import React,{Component} from 'react';
import mediaStore from '../../../stores/mediaStore';
import mediaActions from '../../../actions/mediaActions';
import MediaItem from './mediaItem';
import MediaItemHeader from './mediaItemHeader';

export default class MediaItemContainer extends Component {
    constructor(){
        super();
        this.state = {
            mediaItems : []
        };
    }
    
    componentWillMount(){
        mediaStore.on('fetched',this.fetchMediaAssets);
    }
    
    fetchMediaAssets = ()=>{
        this.setState({mediaItems : mediaStore.getMediaAssets()});
    }
    
    componentDidMount(){
        mediaActions.fetchMedia();
    }
    
    
    componentWillUnmount(){
         mediaStore.off('fetched',this.fetchMediaAssets);
    }
    
    render(){
        
        const mediaItems = this.state.mediaItems;
        
        const mediaItemsList = mediaItems.map((element,index)=>{
            return <MediaItem {...element} key={index}/>
        })
        return (
            <div id="mediaItemContainer"> 
            
               <div id="mediaItemList">
                    <MediaItemHeader/>
                    {mediaItemsList}
               </div>
            
            </div>  
        );
    }
}