
// 此method為action creater
// 輸出後讓其他component可調用這些method
export const createTodo = text => {
    // return action 物件
    return {
        // 唯一必須要傳遞的是action物件的type,型態為字串,且不能重複
        type: 'CREATE_TODO',
        // payload 則沒嚴格規定如何寫
        text: text,
    }
}
export const removeTodo = id => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}