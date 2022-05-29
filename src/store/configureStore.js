import {combineReducers} from "redux";
import {loadFromLocalStorage} from "./localStorage";
import createSagaMiddleware from 'redux-saga';
import {rootSagas} from "./rootSagas";
import {configureStore} from "@reduxjs/toolkit";
// import usersSlice from "./slices/usersSlice";
import animalsSlice from "./slices/animalsSlice";


const rootReducer = combineReducers({
    // 'users': usersSlice.reducer,
    'animals': animalsSlice.reducer,
});

const persistedState = loadFromLocalStorage();

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: true,
    preloadedState: persistedState
});

sagaMiddleware.run(rootSagas);

// store.subscribe(() => {
//     saveToLocalStorage({
//         users: {
//             ...initialState,
//             user: store.getState().users.user
//         },
//     });
// });

export default store;