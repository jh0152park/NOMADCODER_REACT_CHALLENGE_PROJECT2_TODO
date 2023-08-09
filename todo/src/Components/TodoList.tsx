import { useRecoilValue } from "recoil";
import { ItemBoardState } from "../GlobalConfig";

import {
    Container,
    DoingBox,
    DoneBox,
    NewBox,
    PostitTitle,
    TodoBox,
} from "../Styles/TodoListStyle";

import CreateItem from "./CreateItem";
import ActionItem from "./ActionItme";
import DeleteBoard from "./DeleteBoard";

function TodoList() {
    const allItemBoard = useRecoilValue(ItemBoardState);

    return (
        <>
            <CreateItem></CreateItem>
            <Container>
                {allItemBoard.map((category) => (
                    <NewBox category={category}>
                        <PostitTitle>
                            {category}
                            <DeleteBoard category={category}></DeleteBoard>
                        </PostitTitle>
                        <ActionItem category={category}></ActionItem>
                    </NewBox>
                ))}
            </Container>
        </>
    );
}

export default TodoList;
