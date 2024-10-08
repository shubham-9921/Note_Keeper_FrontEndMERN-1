import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { createNoteReducer, noteReducer } from './reducers/notesReducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    // reducers

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    notesList: noteReducer,
    notesCreate: createNoteReducer
});

const userInfofromLocalStorage = JSON.parse(localStorage.getItem("userInfo"));


const initialState = {
    userLogin: { userInfo: userInfofromLocalStorage },

};


const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(...middleware)),
    // window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default store;