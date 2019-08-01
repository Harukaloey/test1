import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import Chart from './Chart';
import MetricSelector from './MetricSelector';

const useStyles = makeStyles({
  paper: {
    margin: "3%",
    padding: "20px",
    // overflowY: "scroll"
  }
});

export default () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <MetricSelector />
      <Chart />
    </Paper>
  ); 
}
