const initialState = {
	error: false
};

export default function(state = initialState, action) {
	switch (action.types) {
		case 'VALIDAR_FORMULARIO':
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
}
