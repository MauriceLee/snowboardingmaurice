import React, { Component } from 'react';
import Title from './components_todolist/Title';
import List from './components_todolist/List';
import TodoForm from './components_todolist/TodoForm';
import { createStore } from 'redux';
import todoReducer from './reducers/index';
import { Provider } from "react-redux";

// 調用createStore, 加入reducer建立store 
let store = createStore(
	todoReducer,
	// redux 的 chrome 開發工具
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default class Todolist extends Component {
	render() {
		return (
			// 將建立好的store交給Provider, 使底下所有組件皆能取得store裡的state
			<Provider store={store}>
				<div>
					<Title/>
					<br />
					<TodoForm/>
					<br />
					<List/>
				</div>
			</Provider>
		)
	}
}