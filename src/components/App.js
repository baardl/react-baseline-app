import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import ToDoDetails from "../todos/ToDoDetailsComponent";

const App = () => (
    <div>
        <table>
            <td>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </td>
            <td>
                <ToDoDetails/>
            </td>
        </table>
    </div>
)

export default App
