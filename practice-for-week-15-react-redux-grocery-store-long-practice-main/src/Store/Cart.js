const ADD_PRODUCE = "ADD_PRODUCE"
export default function cartReducer(state = {},action) {
    Object.freeze(state);
    const nextState = {...state}
    switch(action.type) {
        case ADD_PRODUCE:
            nextState[action.produce.id] = {id: action.produce.id, count: 1};
//produceid{id: produceid, count: 1}
        default:
            return state;
    }
}

export const addProduce = (produce) => {
    return {
        type: ADD_PRODUCE,
        produce
    }
}