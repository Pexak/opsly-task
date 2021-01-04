import {combineReducers, createStore} from 'redux';
import canvasObjects from './reducers/canvas-objects.reducer';
export default createStore(combineReducers({canvasObjects}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
