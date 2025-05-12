export const settablenumber = (value) => async dispatch => {
    dispatch({
        type: "SETTABLENUMBER",
        payload: value
    })
}

export const resettablenumber = (value) => async dispatch  =>{
    dispatch({
        type: "RESETTABLENUMBER",
        payload: value
    })
}


export const setfilterdata = (value)=> async dispatch =>{
    dispatch({
        type: "SETFILTERDATA",
        payload: value
    })
}

export const resetfilterdata = (value) => async dispatch =>{
    dispatch({
        type: "RESETFILTERDATA",
        payload: value
    })
}

export const addorder = (id,name,cuisine,image,caloriesPerServing,table_number) => async dispatch => {
dispatch({
    type: "ADDORDER",
    payload: {
        id: id,
        name: name,
        cuisine: cuisine,
        image: image,
        caloriesPerServing: caloriesPerServing,
        table_number : table_number
    }
})
}
