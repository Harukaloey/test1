import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Provider, createClient, useQuery } from "urql";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const client = createClient({
  url: "https://react.eogresources.com/graphql"
});

const measurementQuery = `
query($input: MeasurementQuery) {
  getMeasurements(input: $input) {
    metric,
    at,
    value,
    unit
  }                                                                                                                                  
}
`;

const useStyles = makeStyles({
  chartBox: {
    // overflowX: "scroll",
    padding: "5px 0"
  }
});



export default () => {
  return (
    <Provider value={client}>
      <Chart />
    </Provider>
  );
};

const Chart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const heartBeat = useSelector(state => state.heartBeat);
  const measurements = useSelector(state => state.measurements);

  const [measurementRes] = useQuery({
    query: measurementQuery,
    variables: {
      input: {
        metricName: "oilTemp",
        before: heartBeat.before,
        after: heartBeat.after
      }
    }
  });

  const { fetching, data, error } = measurementRes;

  useEffect(
    () => {
      if (error) {
        // console.log(error.message);
        return;
      }
      if (!data) {
        return;
      } else {
        const { getMeasurements } = data;

        dispatch({
          type: "GET_MEASUREMENTS",
          payload: getMeasurements
        })        
      }
    }
  );

  if (fetching) return <LinearProgress />;

  return (
    <Box className={classes.chartBox}>
      {measurements.length ?
        <ResponsiveContainer width="100%" minWidth={300} aspect={16.0 / 9.0}>
          <LineChart
            // width={1000}
            height={600}
            data={measurements}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="at" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 6 }}
              dot={false}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
        : 
        null
      }
    </Box>
  );
};