import React from "react";
import {connect} from "react-redux";
import {updateTodo} from "../actions";

let UpdateTodo = ({ todo, dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(updateTodo(todo.id,input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Update Todo
                </button>
            </form>
        </div>
    )
}
UpdateTodo = connect()(UpdateTodo)

export default UpdateTodo