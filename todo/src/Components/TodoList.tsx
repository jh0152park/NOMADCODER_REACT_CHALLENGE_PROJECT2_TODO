import { useRecoilState, useRecoilValue } from "recoil";
import { TodoState } from "../GlobalConfig";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
    const [allTodo, setAllTodo] = useRecoilState(TodoState);

    return (
        <div>
            <h1>To Dos</h1>
            <hr></hr>

            <CreateTodo />

            <ul>
                {allTodo.map((todo) => (
                    <Todo key={todo.id} {...todo}></Todo>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
