import { useRecoilState, useRecoilValue } from "recoil";
import { TodoSelector, TodoState } from "../GlobalConfig";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
    const [todo, doing, done] = useRecoilValue(TodoSelector);

    return (
        <div>
            <h1>To Dos</h1>
            <CreateTodo />
            <hr></hr>

            <h1>Todo</h1>
            <ul>
                {todo.map((item) => (
                    <Todo key={item.id} {...item}></Todo>
                ))}
            </ul>
            <hr></hr>

            <h1>Doing</h1>
            <ul>
                {doing.map((item) => (
                    <Todo key={item.id} {...item}></Todo>
                ))}
            </ul>
            <hr></hr>

            <h1>Done</h1>
            <ul>
                {done.map((item) => (
                    <Todo key={item.id} {...item}></Todo>
                ))}
            </ul>
            <hr></hr>
        </div>
    );
}

export default TodoList;
