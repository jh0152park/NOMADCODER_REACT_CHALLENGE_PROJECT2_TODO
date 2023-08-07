import { useForm } from "react-hook-form";
import { IForm, TodoState } from "../GlobalConfig";
import { useRecoilState } from "recoil";

function CreateTodo() {
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
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("todo", {
                    required: "Please wirte a Todo",
                })}
                placeholder="Write a Todo"
            ></input>
            <button>Add</button>
        </form>
    );
}

export default CreateTodo;
