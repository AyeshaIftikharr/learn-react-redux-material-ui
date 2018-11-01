import React, { Component } from 'react';
import Searchbar from './Components/Searchbar';
import Card from './Components/Card';
import LoadingSpinner from './Components/LoadingSpinner';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { fetchProfile, fetchRequest } from '../../actions/profileActions';

class SearchUser extends Component {
	state = {
		text: '',
	};

	onHandleSubmit = event => {
		event.preventDefault();
	};

	onHandleChange = event => {
		const username = event.currentTarget.value;
		if (username) {
			// Due to Redux Thunk we have access to dispatch anyway
			this.props.dispatch(fetchRequest()); // this.props.fetchRequest();
			this.props.dispatch(fetchProfile(username)); // this.props.fetchProfile(username);
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

// const mapDispatchToProps = dispatch => ({
// 	fetchProfile, // short hand syntax  fetchProfile: fetchProfile
// 	fetchRequest,
// });
// export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
// Usually dispatch to props
// Action Creator
// const addMessage = (message) => {
//   return {
//     type: 'ADD',
//     message: message
//   }
// };

// // change code below this line
// const mapDispatchToProps = dispatch => ({ // returns object
//   submitNewMessage: message => dispatch(addMessage(message)),
// });
export default connect(mapStateToProps)(SearchUser);