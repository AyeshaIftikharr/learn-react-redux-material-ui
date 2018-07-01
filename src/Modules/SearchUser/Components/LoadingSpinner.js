import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  root: {
    flexGrow: 1,
  },
  item: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function LoadingSpinner(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item lg className={classes.item}>
          <CircularProgress className={classes.progress} /> Loading...
      </Grid>
      </Grid>
    </div>
  );
}

LoadingSpinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingSpinner);