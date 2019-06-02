import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Title extends Component {
	render() {
		// 接收來自上層元件的 todos 陣列
		const {
			todos,
		} = this.props
		return (
			<Container>
				<h1>待辦事項清單</h1>
				<h4>剩餘數目：{todos.length}</h4>
			</Container>
		)
	}
}