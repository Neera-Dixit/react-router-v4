import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/index';
import mockData from '../util/mockData';

class MediaStore extends EventEmitter {
 
  constructor(){
    super();
    this.mediaAssets=[];
  }

  getMediaAssets = () => {
    return this.mediaAssets;
  }

  fetchMediaAssetsFromApi(){
      this.mediaAssets = mockData;
      this.emit('fetched');
  }
  
  mediaStoreListener = (actionObj) => {
    switch(actionObj.actionType){
            
            case 'FETCHMEDIA' : {
                       this.fetchMediaAssetsFromApi();
                       break;
                    }

       }
  }

}

let mediaStore = new MediaStore();
Dispatcher.register(mediaStore.mediaStoreListener);
export default mediaStore;