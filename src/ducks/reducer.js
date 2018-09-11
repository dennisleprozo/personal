const initialState = {
    classes = [],
    list: []
}

const ADD_TO_LIST = "ADD_TO_LIST";

export function addToList(classes) {
    return  {
        type: ADD_TO_LIST,
        payload:  classes 
    }
}

export default function reducer( state = initialState, action ) {
    switch (action.type) {
        case ADD_TO_LIST:
        const { classes } = action.payload;

        return Object.assign( {}, state, { 
        list: [...state.list, classes]
        })
    default:
        return state;
    }
}

export function updatedList(classes) {
    return {
        type: UPDATE_LIST,
        payload: classes,
    }
}