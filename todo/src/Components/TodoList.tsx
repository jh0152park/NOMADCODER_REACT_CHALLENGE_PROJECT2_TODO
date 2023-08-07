import { useForm } from "react-hook-form";

interface IForm {
    todo: string;
}

function TodoList() {
    const { register, setValue, handleSubmit } = useForm<IForm>();

    function handleValid(data: IForm) {
        console.log("add todo is ", data.todo);
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

            <ul></ul>
        </div>
    );
}

export default TodoList;
