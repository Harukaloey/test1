import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  box: {
    width: "166px"
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
  formControl: {
    width: "100%",
    marginBottom: "40px"
  },
  formGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
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
      <FormLabel component="legend">Select metric:</FormLabel>
      <FormGroup className={classes.formGroup}>
        <Box className={classes.box}>
          <FormControlLabel
            control={
              <Checkbox 
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
              <Checkbox 
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
              <Checkbox 
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
              <Checkbox 
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
              <Checkbox 
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
              <Checkbox 
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
