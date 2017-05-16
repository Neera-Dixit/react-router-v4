import Dispatcher from '../dispatcher/index';

let mediaActions = {

	fetchMedia : ()=>{
		Dispatcher.dispatch({
			actionType : 'FETCHMEDIA'
		});

	}
    
}

export default mediaActions;