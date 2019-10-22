import { createStore, applyMiddleware } from 'redux';
import loggerMiddleWare from 'redux-logger';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'alert',
        'state',
        'structure'
    ]
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(
    persistedReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleWare
    )
)