import React, { Component } from 'react';
import SearchUser from './Modules/SearchUser/SearcUser';
import About from './Modules/About';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'
import createStore from './store';
const store = createStore();


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/" component={SearchUser} />
						<Route path="/about" component={About}/>
					</Switch>
				</Router>
			</Provider>
		);
	}
}


export default App;
