import React, { Component } from 'react';
import Searchbar from './Components/Searchbar';
import Card from './Components/Card';
import LoadingSpinner from './Components/LoadingSpinner';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { fetchProfile, fetchRequest } from '../../actions/profileActions';

class SearchUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};

		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
	}

	onHandleSubmit(event) {
		event.preventDefault();
	}

	onHandleChange(event) {
		const username = event.currentTarget.value;
		if (username) {

			this.props.fetchRequest();
			this.props.fetchProfile(username);
		}

	}

	render() {
		return (
			<div>
				<AppBar position="static">
					<Toolbar >
						<Searchbar
							fullWidth
							text={this.state.text}
							onHandleChange={this.onHandleChange}
							onHandleSubmit={this.onHandleSubmit} 
						/>
					</Toolbar>
				</AppBar>
				{this.props.loading ? <LoadingSpinner /> : <Card userInfo={this.props.profile} />}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	profile: state.getProfile.profile,
	loading: state.getProfile.loading
});

export default connect(mapStateToProps, { fetchProfile, fetchRequest })(SearchUser);