import { useRecoilState, useSetRecoilState } from "recoil";
import { Categories, ITodo, TodoState } from "../GlobalConfig";

function Todo({ text, category, id }: ITodo) {
    const [allTodo, setAllTodo] = useRecoilState(TodoState);

    function onButtonClick(category: ITodo["category"], id: ITodo["id"]) {
        let newOne = allTodo.map((todo) =>
            todo.id !== id
                ? todo
                : {
                      text: todo.text,
                      id: todo.id,
                      category: category,
                  }
        );
        setAllTodo(newOne);
    }

    return (
        <li>
            <span>{text}</span>
            {category !== Categories.Todo && (
                <button onClick={() => onButtonClick(Categories.Todo, id)}>
                    Todo
                </button>
            )}
            {category !== Categories.Doing && (
                <button onClick={() => onButtonClick(Categories.Doing, id)}>
                    Doing
                </button>
            )}
            {category !== Categories.Done && (
                <button onClick={() => onButtonClick(Categories.Done, id)}>
                    Done
                </button>
            )}
        </li>
    );
}

export default Todo;
