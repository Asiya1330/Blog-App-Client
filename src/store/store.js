import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import thunk from 'thunk';
import reducer from './reducers'

const store = createStore(reducer, compose(applyMiddleware(thunk)))
export default store;