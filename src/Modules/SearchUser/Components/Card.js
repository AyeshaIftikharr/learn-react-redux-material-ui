import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  item: {
    padding: theme.spacing.unit * 2,
  },
  paper: {
    margin: 30,
    marginLeft: 100,
    marginRight: 100,
    padding: 20,
    height: 360,
  },
  portionUpperLeft: {
    height: 200,
  },
  divider: {
    marginBottom: 50,
    marginTop: 20,
  },
  portionUpperRight: {
    paddingLeft: 50,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar: {
    margin: 10,
    marginLeft: 90,
    marginBottom: 40,
  },
  bigAvatar: {
    width: 180,
    height: 180,
  },
  center: {
    paddingLeft: 20,
  },
  padding: {
    paddingLeft: 50,
  },
  text: {
    font: 'bold',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});


function isEmpty(obj) {
  for (var x in obj) { return false; }
  return true;
}

class Card extends Component {
  render() {
    const { classes } = this.props;
    let user;
    if (!isEmpty(this.props.userInfo)) {
      console.log(this.props.userInfo);
      user =
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={24}>

              <Grid item xs={4} >

                <Grid item xs={12} className={classes.center}  >
                  <Avatar
                    alt="Profile Picture"
                    src={this.props.userInfo.avatar_url}
                    className={classNames(classes.avatar, classes.bigAvatar)}
                  />
                </Grid>

                <Grid className={classes.row} item xs={12} >

                  <Grid item xs>
                    <div className={classes.padding}>
                      <Typography className={classes.text} 
                      variant="subheading" 
                      color="textSecondary">
                      <b>Followers</b>
                      </Typography>
                      <Typography className={classes.center} 
                      variant="body2">
                      {this.props.userInfo.followers}
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item xs>
                    <div className={classes.padding}>
                      <Typography variant="subheading" 
                      color="textSecondary" 
                      align="left">
                      <b>Following</b>
                      </Typography>
                      <Typography className={classes.center} variant="body2" >
                      {this.props.userInfo.following}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>

              </Grid>

              <Grid item xs={8} >
                <div className={classes.row}>
                  <Grid item xs={7}>
                    <Typography className={classes.portionUpperRight} 
                    variant="headline">
                    {this.props.userInfo.name}
                    </Typography>
                    <Typography className={classes.portionUpperRight}
                     variant="subheading" 
                     color="textSecondary">
                    {this.props.userInfo.login}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Button variant="contained" 
                    color="primary" 
                    className={classes.button}>
                      Edit
                      <Edit className={classes.rightIcon} />
                    </Button>
                  </Grid>
                </div>

                <Divider className={classes.divider} />

                <div className={classes.row}>
                  <Grid item xs={4} >
                    <Typography className={classes.portionUpperRight} 
                    variant="subheading" 
                    color="textSecondary">
                    Location</Typography>
                  </Grid>

                  <Grid item xs={3} >
                    <Typography className={classes.portionUpperRight} 
                    variant="subheading" 
                    color="textSecondary">
                      <b>{this.props.userInfo.location}</b>
                    </Typography>
                  </Grid>
                </div>

                <div className={classes.row}>
                  <Grid item xs={4} >
                    <Typography className={classes.portionUpperRight} 
                    variant="subheading" 
                    color="textSecondary">
                    Public Repositories
                    </Typography>
                  </Grid>
                  <Grid item xs={3} >
                    <Typography className={classes.portionUpperRight} 
                    variant="subheading" 
                    color="textSecondary">
                      <b>{this.props.userInfo.public_repos}</b>
                    </Typography>
                  </Grid>
                </div>

                <div className={classes.row}>
                  <Grid item xs={4} >
                    <Typography className={classes.portionUpperRight} 
                    variant="subheading" 
                    color="textSecondary">
                    Public gists
                    </Typography>
                  </Grid>
                  <Grid item xs={3} >
                    <Typography className={classes.portionUpperRight} 
                    variant="subheading" 
                    color="textSecondary">
                      <b>{this.props.userInfo.public_gists}</b>
                    </Typography>
                  </Grid>
                </div>

                <div className={classes.row}>
                  <Grid item xs={4} >
                    <Typography className={classes.portionUpperRight} 
                    variant="subheading" 
                    color="textSecondary">Created at</Typography>
                  </Grid>
                  <Grid item xs={5} >
                    <Typography className={classes.portionUpperRight} 
                    variant="subheading" 
                    color="textSecondary">
                      <b>{this.props.userInfo.created_at}</b>
                    </Typography>
                  </Grid>
                </div>

                <div className={classes.row}>
                  <Grid item xs={4} >
                    <Typography className={classes.portionUpperRight} 
                    variant="subheading" 
                    color="textSecondary">
                    Updated at
                    </Typography>
                  </Grid>
                  <Grid item xs={5} >
                    <Typography className={classes.portionUpperRight} 
                    variant="subheading" 
                    color="textSecondary">
                      <b>{this.props.userInfo.updated_at}</b>
                    </Typography>
                  </Grid>
                </div>
              </Grid>

            </Grid>
          </Paper>
        </div>
    }

    return (
      <div>
        {user}
      </div>
    );
  }

}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);