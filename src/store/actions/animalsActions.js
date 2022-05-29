import animalsSlice from "../slices/animalsSlice";


export const {
    addAnimalSuccess,
    addAnimalFailure,
    addAnimalRequest,
    fetchOneAnimalFailure,
    fetchOneAnimalRequest,
    fetchOneAnimalSuccess,
    fetchAnimalsSuccess,
    fetchAnimalsFailure,
    fetchAnimalsRequest,
} = animalsSlice.actions;