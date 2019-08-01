import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography";
import { blue, grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  box: {
    width: "166px",
    margin: "2px"
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "64px",
    padding: "0"
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
    justifyContent: "space-between"
  }
});

const EOGCheckbox = withStyles({
  root: {
    color: grey[500],
    '&$checked': {
      color: blue[900],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


export default () => {
  const classes = useStyles();

  const [state, setState] = useState({
    tubingPressure: true,
    casingPressure: false,
    oilTemp: false,
    flareTemp: false,
    waterTemp: false,
    injValveOpen: false
  });

  const handleChange = metricName => event => {
    setState({ 
      ...state, [metricName]: event.target.checked 
    });
  };

  useEffect(
    () => {
      console.log(state)
    }
  );
  
  const { tubingPressure, casingPressure, oilTemp, flareTemp, waterTemp, injValveOpen } = state;

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend" className={classes.formLabel}>Select metric:</FormLabel>
      <FormGroup className={classes.formGroup}>
        <Box className={classes.box}>
          <FormControlLabel
            control={
              <EOGCheckbox 
                checked={tubingPressure} 
                onChange={handleChange('tubingPressure')} 
                value="tubingPressure" />
            }
            label="Tubing Pressure"
          />
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle} color="textSecondary">
                { 10000 }
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.box}>
          <FormControlLabel
            control={
              <EOGCheckbox 
              checked={casingPressure} 
              onChange={handleChange('casingPressure')} 
              value="casingPressure" />
            }
            label="Casing Pressure"
            />
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.cardTitle} color="textSecondary">
                  { 10000 }
                </Typography>
              </CardContent>
            </Card>
        </Box>
        <Box className={classes.box}>
          <FormControlLabel
            control={
              <EOGCheckbox 
                checked={oilTemp} 
                onChange={handleChange('oilTemp')} 
                value="oilTemp" />
            }
            label="Oil Temp"
          />
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle} color="textSecondary">
                { 10000 }
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.box}>
          <FormControlLabel
            control={
              <EOGCheckbox 
                checked={flareTemp} 
                onChange={handleChange('flareTemp')} 
                value="flareTemp" />
            }
            label="Flare Temp"
          />
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle} color="textSecondary">
                { 10000 }
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.box}>
          <FormControlLabel
            control={
              <EOGCheckbox 
                checked={waterTemp} 
                onChange={handleChange('waterTemp')} 
                value="waterTemp" />
            }
            label="Water Temp"
          />
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle} color="textSecondary">
                { 10000 }
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.box}>
          <FormControlLabel
            control={
              <EOGCheckbox 
                checked={injValveOpen} 
                onChange={handleChange('injValveOpen')}
                value="injValveOpen" />
            }
            label="Inj Valve Open"
          />
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle} color="textSecondary">
                { 10000 }
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </FormGroup>
    </FormControl>
  ); 
}
