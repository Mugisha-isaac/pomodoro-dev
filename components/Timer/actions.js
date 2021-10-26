import {START_TIMER,RESTART_TIMER,ADD_SECOND} from './types';

function StartTimer(){
    return{
        type: START_TIMER
    }
}

function RestartTimer(){
    return{
        type:RESTART_TIMER
    }
}

function AddSecond(){
    return {
        type:ADD_SECOND
    }
}


const actionCreators ={
    StartTimer,
    RestartTimer,
    AddSecond
}

export {actionCreators};