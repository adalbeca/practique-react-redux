export const types= {
    HANDLE_ADD : 'HANDLE_ADD',
    HANDLE_LESS : 'HANDLE_LESS',
    HANDLE_INPUT : 'HANDLE_INPUT',
};

const initialState = {
    cantidad: 1,
    input: []
};
// now, declare the reducer, get first param the state, and second the action and return new state.
export  default function reducer (state = initialState, action) {
    switch ( action.type ) {
        case types.HANDLE_ADD:
            return { ...state, cantidad: state.cantidad+1 };
        case types.HANDLE_LESS:
            return { ...state, cantidad: state.cantidad-1 };
        case types.HANDLE_INPUT:
            return { ...state, input: state.input.concat(action.tarea) };
        default :
            return state;
    }
};

export function handleAdd() {
    return { type: types.HANDLE_ADD };
}

export function handleLess() {
    return { type: types.HANDLE_LESS };
}

export function handleInput(tarea) {
    return { type: types.HANDLE_INPUT, tarea };
}