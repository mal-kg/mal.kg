import {createSlice} from "@reduxjs/toolkit";

const name = 'animals'
const initialState = {
    animals:[],
    animal:{},
    fetchLoading: false,
    createLoading: false,
    createError: null,
    fetchError: null,
}

const animalsSlice = createSlice({
    name,
    initialState,
    reducers: {
        addAnimalRequest(state){
            state.createLoading = true;
        },
        addAnimalSuccess(state) {
            state.createLoading = false;
            state.createError = null;
        },
        addAnimalFailure(state,action ){
            state.createLoading = false;
            state.createError = action.payload;
        },
        fetchAnimalsRequest(state){
            state.fetchLoading = true;
        },
        fetchAnimalsSuccess(state, action){
            state.fetchLoading = false;
            state.fetchError = null;
            state.animals = action.payload
        },
        fetchAnimalsFailure(state,action){
            state.fetchLoading = false;
            state.fetchError = action.payload;
        },
        fetchOneAnimalRequest(state){
            state.fetchLoading = true;
        },
        fetchOneAnimalSuccess(state, action){
            state.fetchLoading = false;
            state.fetchError = null;
            state.animal = action.payload
        },
        fetchOneAnimalFailure(state,action){
            state.fetchLoading = false;
            state.fetchError = action.payload;
        },

    }
});

export default animalsSlice;