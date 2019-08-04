import { SELECT_METRIC } from "../actions";
// import * as actions from "../actions";

const initialState = {
	tubingPressure: false,
	casingPressure: false,
	oilTemp: false,
	flareTemp: false,
	waterTemp: false,
	injValveOpen: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_METRIC:
			return {
				...state,
				[action.payload]: !state[action.payload]
			}
		default:
			return state;
	}
};
