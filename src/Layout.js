import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './AppBar'
import SimpleMediaCard from './Cards'
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid container spacing={24}>
        <MenuAppBar/>
      </Grid>
      <Grid container xs={12} spacing={24} style={{margin:40}}>
        <Grid xs={12} sm={6} md={4} lg={3} item>
          <SimpleMediaCard/>
        </Grid>
      </Grid>
    </Grid>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
