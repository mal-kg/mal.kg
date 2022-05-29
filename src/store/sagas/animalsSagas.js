import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";
import History from "../../History";
import { useNavigate } from 'react-router-dom'
import {put, takeEvery} from "redux-saga/effects";
import {
    addAnimalFailure,
    addAnimalRequest,
    addAnimalSuccess, fetchAnimalsFailure,
    fetchAnimalsRequest, fetchAnimalsSuccess, fetchOneAnimalFailure,
    fetchOneAnimalRequest, fetchOneAnimalSuccess
} from "../actions/animalsActions";



export function* addAnimalSaga({payload}) {

    try {
        console.log(payload)
        yield axiosApi.post( '/animals', payload);
        yield put(addAnimalSuccess());
        toast.success('Ваша информация добавлена');


    } catch (error) {
        if (!error.response) {
            toast.error(error.message);
        }
        yield put(addAnimalFailure(error.response?.data));
    }
}

export function* getAnimalsSagas() {
    try {
        const response = yield axiosApi.get('/animals');
        yield put(fetchAnimalsSuccess(response.data));
    } catch (error) {
        if (!error.response) {
            toast.error(error.message);
        }
        yield put(fetchAnimalsFailure(error.response.data));
    }
}

export function* getOneSagas({payload}) {
    try {
        const response = yield axiosApi.get('/animals/'+payload);
        yield put(fetchOneAnimalSuccess(response.data));
    } catch (error) {
        if (!error.response) {
            toast.error(error.message);
        }
        yield put(fetchOneAnimalFailure(error.response.data));
    }
}



const animalSaga = [
    takeEvery(addAnimalRequest, addAnimalSaga),
    takeEvery(fetchAnimalsRequest, getAnimalsSagas),
    takeEvery(fetchOneAnimalRequest, getOneSagas),

];

export default animalSaga;