import { useRecoilState, useRecoilValue } from "recoil";
import {
    Categories,
    CategoryState,
    TodoSelector,
    TodoState,
} from "../GlobalConfig";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import {
    Container,
    DoingBox,
    DoneBox,
    NewBox,
    PostitTitle,
    TodoBox,
} from "../Styles/TodoListStyle";
import { FormContainer } from "../Styles/CreateItemStyle";
import CreateItem from "./CreateItem";

function TodoList() {
    const [todo, doing, done] = useRecoilValue(TodoSelector);
    const [category, setCategory] = useRecoilState(CategoryState);

    function onInput(event: React.FormEvent<HTMLSelectElement>) {
        setCategory(event.currentTarget.value as any);
    }

    return (
        // <div>
        //     <h1>To Dos</h1>
        //     <br></br>
        //     <select value={category} onInput={onInput}>
        //         <option value={Categories.Todo}>Todo</option>
        //         <option value={Categories.Doing}>Doing</option>
        //         <option value={Categories.Done}>Done</option>
        //     </select>
        //     <CreateTodo />
        //     <hr></hr>

        //     <h1>Todo</h1>
        //     <ul>
        //         {todo.map((item) => (
        //             <Todo key={item.id} {...item}></Todo>
        //         ))}
        //     </ul>
        //     <hr></hr>

        //     <h1>Doing</h1>
        //     <ul>
        //         {doing.map((item) => (
        //             <Todo key={item.id} {...item}></Todo>
        //         ))}
        //     </ul>
        //     <hr></hr>

        //     <h1>Done</h1>
        //     <ul>
        //         {done.map((item) => (
        //             <Todo key={item.id} {...item}></Todo>
        //         ))}
        //     </ul>
        //     <hr></hr>
        // </div>

        <>
            <CreateItem></CreateItem>
            <Container>
                <TodoBox>
                    <PostitTitle>Todo</PostitTitle>
                </TodoBox>
                <DoingBox>
                    <PostitTitle>Doing</PostitTitle>
                </DoingBox>
                <DoneBox>
                    <PostitTitle>Done</PostitTitle>
                </DoneBox>
            </Container>
        </>
    );
}

export default TodoList;
