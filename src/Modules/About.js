import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';

const styles = theme => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
    },
    typography: {
        margin: 'auto',
        marginBottom: 15,
    },
    left: {
        width: 700,
        margin: 100,
        marginRight: 0,
    },
});

class About extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar >
                        <Typography color="inherit" variant="display1" align="right" style={{marginLeft: 90}}>
                            About
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="container">
                    <div className={classes.row}>
                        <div className={classes.left}>
                            <Typography className={classes.typography}
                                variant="body1"
                                align="justify"
                                color="textSecondary"
                                gutterBottom={true}
                                paragraph={true}>
                                This project allows you to search users which are on github on the basis of 
                                their username. There is also an About page which describes this small project.
                            </Typography>
                            <Typography className={classes.typography}
                                variant="body1"
                                align="justify"
                                color="textSecondary"
                                gutterBottom={true}
                                paragraph={true}>
                                Basically, this project is a "Getting-Started" to the basic concepts of react,
                                redux, redux thunk, react-router and material-ui. This react app is 
                                made using create-react-app. It utilizes the basic concepts of react including 
                                JSX, rendering elements, components and props, state and lifecycle, handling 
                                events and conditional rendering. State of the app is managed using redux 
                                provider, store, actions and reducers. Redux-thunk middleware is used to call 
                                the dispatcher directly.
                            </Typography>
                            <Typography className={classes.typography}
                                variant="body1"
                                align="justify"
                                color="textSecondary"
                                gutterBottom={true}
                                paragraph={true}>
                                 Github API is used for fetching the data of a single user. Axios promise based 
                                HTTP client is used for the said purpose. And Finally, react router library is 
                                utilized for handling routing.
                            </Typography>
                            <Typography className={classes.typography}
                                variant="body1"
                                align="justify"
                                color="textSecondary"
                                gutterBottom={true}
                                paragraph={true}>
                                It consists of two pages, the Search User page aand the About page. The styling
                                of the app is done using the supported components from material-ui which includes
                                grid Layout, AppBar, Svg Icons, Buttons, Cards, Dividers, Typography, TextFields,
                                Paper and Avatars.
                            </Typography>


                        </div>

                        <div >
                            <img src={logo} className="App-logo" alt="logo" height="500" width="500" />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(About);