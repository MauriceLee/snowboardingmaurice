import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class List extends Component {
    render() {
        // 接收來自上層元件的 todos 陣列
        const {
            todos
        } = this.props
        localStorage.setItem("TodosList",JSON.stringify(todos));
        return (
            <Container>
                <ol>
                    {/* array map */}
                    {todos.map((todo, idx) => {
                        return (
                            <li 
                                key={todo.id} 
                                // 點擊調用來自上層元件提供的 remove 函式
                                onClick={()=>this.props.remove(todo.id)} 
                            >
                                {todo.text}
                            </li>
                        )
                    })
                    }
                </ol>
            </Container>
        )
    }
}