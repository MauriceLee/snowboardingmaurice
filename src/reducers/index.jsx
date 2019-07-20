const initState = {
    todos: JSON.parse(localStorage.getItem("TodosList")) || [],
    currentId: 0
}
  
const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            const id = state.currentId + 1
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        id
                    }
                ],
                currentId: id
            })
        case 'REMOVE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => {
                    return todo.id !== action.id
                })
            })
        default:
            return state
    }
}
  
export default todoReducer