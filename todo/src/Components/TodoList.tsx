import { useRecoilState, useRecoilValue } from "recoil";
import {
    Categories,
    CategoryState,
    TodoSelector,
    TodoState,
} from "../GlobalConfig";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
    const [todo, doing, done] = useRecoilValue(TodoSelector);
    const [category, setCategory] = useRecoilState(CategoryState);

    function onInput(event: React.FormEvent<HTMLSelectElement>) {
        setCategory(event.currentTarget.value as any);
    }

    return (
        <div>
            <h1>To Dos</h1>
            <br></br>
            <select value={category} onInput={onInput}>
                <option value={Categories.Todo}>Todo</option>
                <option value={Categories.Doing}>Doing</option>
                <option value={Categories.Done}>Done</option>
            </select>
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
