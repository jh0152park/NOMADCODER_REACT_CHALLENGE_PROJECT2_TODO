import { useSetRecoilState } from "recoil";
import { ITodo, TodoState } from "../GlobalConfig";

function Todo({ text, category }: ITodo) {
    const setTodo = useSetRecoilState(TodoState);

    function onButtonClick(category: ITodo["category"]) {}

    return (
        <li>
            <span>{text}</span>
            {category !== "Todo" && (
                <button onClick={() => onButtonClick("Todo")}>Todo</button>
            )}
            {category !== "Doing" && (
                <button onClick={() => onButtonClick("Doing")}>Doing</button>
            )}
            {category !== "Done" && (
                <button onClick={() => onButtonClick("Done")}>Done</button>
            )}
        </li>
    );
}

export default Todo;
