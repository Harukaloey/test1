import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { blue, grey } from "@material-ui/core/colors";
import { Provider, createClient, useQuery } from "urql";

const useStyles = makeStyles({
  box: {
    width: "166px",
    margin: "5px"
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "64px",
    padding: "0",
    width: "85%"
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  cardTitle: {
    fontSize: "24px"
  },
  formLabel: {
    paddingBottom: "20px"
  },
  formControl: {
    width: "100%",
    marginBottom: "40px"
  },
  formGroup: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

const EOGCheckbox = withStyles({
  root: {
    color: grey[500],
    "&$checked": {
      color: blue[900]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const metricArray = [
  {
    value: "tubingPressure",
    label: "Tubing Pressure"
  },
  {
    value: "casingPressure",
    label: "Casing Pressure"
  },
  {
    value: "oilTemp",
    label: "Oil Temp"
  },
  {
    value: "flareTemp",
    label: "Flare Temp"
  },
  {
    value: "waterTemp",
    label: "Water Temp"
  },
  {
    value: "injValveOpen",
    label: "Inj Valve Open"
  }
];

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

export default () => {
  return (
    <Provider value={client}>
      <MetricSelector />
    </Provider>
  );
};

const MetricSelector = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedMetrics = useSelector(state => state.selectedMetrics);

  // const [measurementRes] = useQuery({
  //   query: measurementQuery,
  //   variables: {
  //     input: {
  //       metricName: metricName,
  //       before: heartBeat.before,
  //       after: heartBeat.after
  //     }
  //   }
  // });

  // const { fetching, data, error } = measurementRes;

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend" className={classes.formLabel}>
        Select metric:
      </FormLabel>
      <FormGroup className={classes.formGroup}>
        {metricArray.map((metric, i) => {
          return (
            <Box className={classes.box} key={`metric${i}`}>
              <FormControlLabel
                control={
                  <EOGCheckbox
                    checked={selectedMetrics[metric.value]}
                    onChange={() =>
                      dispatch({
                        type: "SELECT_METRIC",
                        payload: metric.value
                      })
                    }
                    value={metric.value}
                  />
                }
                label={metric.label}
              />
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    className={classes.cardTitle}
                    color="textSecondary"
                  >
                    {10000}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </FormGroup>
    </FormControl>
  );
};
