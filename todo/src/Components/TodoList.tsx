import { useRecoilState, useRecoilValue } from "recoil";
import {
    Categories,
    CategoryState,
    ItemBoardState,
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
import ActionItem from "./ActionItme";

function TodoList() {
    // const [todo, doing, done] = useRecoilValue(TodoSelector);
    // const [category, setCategory] = useRecoilState(CategoryState);

    // function onInput(event: React.FormEvent<HTMLSelectElement>) {
    //     setCategory(event.currentTarget.value as any);
    // }

    // console.log(allItemBoard);

    const allItemBoard = useRecoilValue(ItemBoardState);

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
                {allItemBoard.map((category) => (
                    <NewBox category={category}>
                        <PostitTitle>{category}</PostitTitle>
                        <ActionItem category={category}></ActionItem>
                    </NewBox>
                ))}
            </Container>
        </>
    );
}

export default TodoList;
