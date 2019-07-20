import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { removeTodo } from "../actions";
import { connect } from "react-redux";

class List extends Component {
    render() {
        localStorage.setItem("TodosList",JSON.stringify(this.props.todos));
        return (
            <Container>
                <ol>
                    {// 從store中取得的
                        this.props.todos.map((todo, index) => {
                            return (
                                <li 
                                    key={todo.id} 
                                    // removeTodo為mapDispatchToProps中removeTodo的method
                                    onClick={()=>this.props.removeTodo(todo.id)} 
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

// 宣告一個method來取得store裡的state資料
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
  
// 宣告一個method來取得actions裡的method,且能夠dispatch讓reducer知道要處理
const mapDispatchToProps = dispatch => {
    return {
        removeTodo: id => {
        // removeTodo為action裡定義的removeTodo method
        dispatch(removeTodo(id))
        }
    }
}
  
// 使該組建裡可調用store裡的state與action中的method
export default connect(mapStateToProps, mapDispatchToProps)(List)