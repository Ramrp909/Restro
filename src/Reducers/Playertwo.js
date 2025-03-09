const initialState = {
    name: 'Leo',
    score: 90
}

export default function PlayertwoReducer(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case 'INC_PLAYERTWO_SCORE':
            return {...state,score:state.score+1}
        case 'DEC_PLAYERTWO_SCORE':
            return {...state,score:state.score-1}
        default:
            return state;
    }
}