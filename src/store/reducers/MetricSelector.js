import { SELECT_METRIC } from "../actions";
// import * as actions from "../actions";

const initialState = {
	selectedMetrics: [
		'tubingPressure',
		'casingPressure',
		'oilTemp',
		'flareTemp',
		'waterTemp',
		'injValveOpen'
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_METRIC:
			// Add/remove selected metric from state array.
			// const metrics = state.selectedMetrics;
			// if (metrics.includes(action.payload)) {
			// 	metrics.filter(metricName => metricName !== action.payload);
			// 	console.log(metrics);
			// 	return {
			// 		...state,
			// 		selectedMetrics: metrics
			// 	}
			// } else {
			// 	return {
			// 		...state,
			// 		selectedMetrics: [...state.selectedMetrics, action.payload]
			// 	}
			// }
			return {
				...state,
				selectedMetrics: [...state.selectedMetrics, action.payload]
			}
		default:
			return state;
	}
};
