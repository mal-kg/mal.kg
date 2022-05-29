import {all} from 'redux-saga/effects';
// import usersSagas from "./sagas/usersSagas";
import animalsSagas from "./sagas/animalsSagas";
;

export function* rootSagas() {
    yield all([
        // ...usersSagas,
        ...animalsSagas,
    ]);
}