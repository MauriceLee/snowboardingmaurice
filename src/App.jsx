import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Buttons from './components/Buttons';
import Home from './Home';
import Equipment from './Equipment';
import Todolist from './Todolist';

export default class App extends Component {
	render() {
		return (
			<div>
				<Buttons />
				<Route path="/" exact component={Home} />
				<Route path="/Equipment" component={Equipment} />
				<Route path="/Todolist" component={Todolist} />
			</div>
		)
	}
}