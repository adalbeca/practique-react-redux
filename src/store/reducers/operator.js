export const types= {
    HANDLE_ADD : 'HANDLE_ADD',
    HANDLE_LESS : 'HANDLE_LESS'
};

const initialState = {
    cantidad: 1,
};
// now, declare the reducer, get first param the state, and second the action and return new state.
export  default function reducer (state = initialState, action) {
    switch ( action.type ) {
        case types.HANDLE_ADD:
            return { ...state, cantidad: state.cantidad+1 };
        case types.HANDLE_LESS:
            return { ...state, cantidad: state.cantidad-1 };
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