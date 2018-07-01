import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    textField: {
        marginLeft: 100,
        marginRight: theme.spacing.unit,
        width: 1000,
        borderBottom: "1px solid #fff",
    },
    color: {
        color: 'white',
    },
    Btn: {
        marginLeft: 50,
      },
});

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            contrastText: '#fff',
        },
    },
});

class Searchbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.props.onHandleSubmit}>
                <MuiThemeProvider theme={theme}>
                    <TextField
                        onChange={this.props.onHandleChange}
                        name="username"
                        type="search"
                        autoFocus="true"
                        placeholder="Search User"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="primary" />
                                </InputAdornment>
                            ),
                            className: classes.color,
                        }}

                    />
                    <Link to={`/about`}>
                        <Button className={classes.Btn} size="large" color="primary">
                            About
                        </Button>
                    </Link>
                </MuiThemeProvider>
            </form>
        );
    }
}

Searchbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Searchbar);
