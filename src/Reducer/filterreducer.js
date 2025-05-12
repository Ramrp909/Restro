const initialState = {
    filter_data: "Easy"
}

export default function filterreducer(state = initialState, action) {
    const {type , payload} = action;
    switch(type) {
    case "SETFILTERDATA" :
        return {...state, filter_data : payload}
    case "RESETFILTERDATA" :
        return {...state, filter_data : "Easy"}
    default :
        return state
    }

}