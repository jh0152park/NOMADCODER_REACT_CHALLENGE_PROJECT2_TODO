import { useRecoilState, useRecoilValue } from "recoil";
import {
    CategoriesList,
    Delete,
    Item,
    Items,
    Move,
} from "../Styles/ActionItemStyle";
import {
    ActionItemState,
    CategoryState,
    ItemBoardState,
} from "../GlobalConfig";

function ActionItem({ category }: { category: string }) {
    const categories = useRecoilValue(ItemBoardState);
    const [allActionItems, setAllActionItems] = useRecoilState(ActionItemState);
    const categoryActionItems = allActionItems.filter(
        (item) => item.category === category
    );

    function DeleteActionItem(targetId: number) {
        console.log("clicked at " + targetId);
        const NewItems = allActionItems.filter((item) => item.id !== targetId);
        setAllActionItems(NewItems);
    }

    return (
        <Items>
            {categoryActionItems.map((item) => (
                <Item key={item.id}>
                    {item.actionItem}
                    <Move>
                        <CategoriesList>
                            {categories.map((category) => (
                                <p>{category}</p>
                            ))}
                        </CategoriesList>
                    </Move>
                    <Delete onClick={() => DeleteActionItem(item.id)}></Delete>
                </Item>
            ))}
        </Items>
    );
}

export default ActionItem;
