import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class TodoForm extends Component {
    constructor() {
        super()
        this.state = {
            text: ""
        }
    }

    createTodo = () => {
        if (!this.state.text) return // input 如果沒有內容，就不執行 createTodo
        this.props.createTodo(this.state.text) // 調用從上層元件傳來的 createTodo 函式
        // 將 input 內容改變為初始狀態
        this.setState({
            text: ""
        })
    }

    onInputChange(e) {
        // 處理 input 的 onChange 事件，將輸入的內容存在 state 中
        this.setState({
            text: e.target.value
        })
    }

    handleKeyDown(e) {
        // 如果 input 判斷有值，而且按下 enter 按鈕，則執行 createTodo
        if (e.target.value && e.keyCode === 13) this.createTodo()
    }
    
    render() {
        return (
            <Container>
                <input
                    type="text" 
                    onChange={e => this.onInputChange(e)} // 監聽 input 的 change 事件
                    value={this.state.text} // 將 state 儲存的 input 值進行雙向綁定
                    onKeyDown={e => this.handleKeyDown(e)} // 監聽 input 的 keyDown 事件
                />
                <button onClick={this.createTodo} >
                    新增
                </button>
            </Container>
        )
    }
}