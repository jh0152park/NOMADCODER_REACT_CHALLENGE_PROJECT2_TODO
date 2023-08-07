import { useRecoilState, useSetRecoilState } from "recoil";
import { ITodo, TodoState } from "../GlobalConfig";

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
            {category !== "Todo" && (
                <button onClick={() => onButtonClick("Todo", id)}>Todo</button>
            )}
            {category !== "Doing" && (
                <button onClick={() => onButtonClick("Doing", id)}>
                    Doing
                </button>
            )}
            {category !== "Done" && (
                <button onClick={() => onButtonClick("Done", id)}>Done</button>
            )}
        </li>
    );
}

export default Todo;
