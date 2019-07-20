import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from "react-redux";

class Title extends Component {
	render() {
		return (
			<Container>
				<h1>待辦事項清單</h1>
				<h4>剩餘數目：{this.props.todos.length}</h4>
			</Container>
		)
	}
}

// 宣告一個method來取得store裡的state資料
const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}
  
// 使該組建裡可調用store裡的state
export default connect(mapStateToProps)(Title)