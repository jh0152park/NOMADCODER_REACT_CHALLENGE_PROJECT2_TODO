import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { TodoState } from "../GlobalConfig";

interface IForm {
    todo: string;
}

function TodoList() {
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const [allTodo, setAllTodo] = useRecoilState(TodoState);

    function handleValid(data: IForm) {
        setAllTodo((oldTodo) => [
            ...oldTodo,
            {
                text: data.todo,
                category: "Todo",
                id: Date.now(),
            },
        ]);
        setValue("todo", "");
    }

    return (
        <div>
            <h1>To Dos</h1>
            <hr></hr>

            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register("todo", {
                        required: "Please wirte a Todo",
                    })}
                    placeholder="Write a Todo"
                ></input>
                <button>Add</button>
            </form>

            <ul>
                {allTodo.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
