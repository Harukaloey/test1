import * as actions from "../actions";

const initialState = {
	selectedMetrics: {
		tubingPressure: false,
		casingPressure: false,
		oilTemp: false,
		flareTemp: false,
		waterTemp: false,
		injValveOpen: false
	}
};

const metricSelected = (state, action) => {
  const { getSelectedMetric } = action;
  const { metricName } = getSelectedMetric;

  return {
    metricName
  };
};

const handlers = {
  [actions.METRIC_SELECTED]: metricSelected
};

export default (state = initialState, action) => {
	const handler = handlers[action.type];
	
	if (typeof handler === "undefined") return state;
	
  return handler(state, action);
};
