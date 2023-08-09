import { useRecoilState } from "recoil";
import { Delete } from "../Styles/ActionItemStyle";
import { ActionItemState, ItemBoardState } from "../GlobalConfig";

function DeleteBoard({ category }: { category: string }) {
    const [allCategory, setAllCategory] = useRecoilState(ItemBoardState);
    const [allActionItems, setAllActionItems] = useRecoilState(ActionItemState);

    function DeleteItemAtBoard() {
        const newActionItems = allActionItems.filter(
            (item) => item.category !== category
        );
        setAllActionItems(newActionItems);
    }

    function DeleteBoard() {
        const newCategory = allCategory.filter((board) => board !== category);

        DeleteItemAtBoard();
        setAllCategory(newCategory);
    }

    return <Delete onClick={DeleteBoard}></Delete>;
}

export default DeleteBoard;
