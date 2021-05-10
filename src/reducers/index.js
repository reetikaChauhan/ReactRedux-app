import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers ({
    auth: authReducer,
    form:formReducer,
    streams:streamReducer
});

//key interpolation syntax
/*

const animalSounds = {cat:'meow' ,dog:'bark'};

const animal = 'lion';

const sound = 'roar';

{ ...animalSounds, [animal]:sound }

{cat:'meow' ,dog:'bark',lion:'roar'}

*/