import React, { Component } from 'react';
import Jbt from './components_home/Jbt';
import Cards from './components_home/Cards';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Jbt></Jbt>
				<Cards></Cards>
			</div>
		)
	}
}
