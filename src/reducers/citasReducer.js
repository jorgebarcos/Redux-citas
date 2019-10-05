const initialState = {
    citas: []
}

export default function(state = initialState, action) {
    switch(action.types) {
        case 'AGREGAR_CITA':
            return {
                ...state,
                citas: [...state.citas, action.payload]
            }
        default:
            return state;
    }
}