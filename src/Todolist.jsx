import React, { Component } from 'react';
import Title from './components_todolist/Title';
import List from './components_todolist/List';
import TodoForm from './components_todolist/TodoForm';

export default class Todolist extends Component {
	constructor() {
		super() 
		let todos = JSON.parse(localStorage.getItem("TodosList")) || []
		this.state = {
			todos: todos,
			startId: 0	// 下一個代辦事項的id
		}
	}
	
	// 新增待辦事項
	createTodo(text) {
		this.setState({
			todos: [...this.state.todos, {
				id: this.state.startId,
				text: text
			}],
			startId: this.state.startId + 1 // 新增且同時設定下一個待辦事項的id
		})
	}

	// 刪除待辦事項
	removeTodo(id) {
		this.setState({
			// filter
			todos: this.state.todos.filter(todo => {
				return todo.id !== id
			})
		})
	}

	render() {
		return (
			<div>
				<Title 
					todos={this.state.todos} 
				/>
				<br />
				<TodoForm 
					createTodo={text => this.createTodo(text)} 
				/>
				<br />
				<List 
					todos={this.state.todos} 
					remove={id => this.removeTodo(id)}
				/>
			</div>
		)
	}
}