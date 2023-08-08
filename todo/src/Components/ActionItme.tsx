import { useRecoilState, useRecoilValue } from "recoil";
import { Delete, Item, Items, Move } from "../Styles/ActionItemStyle";
import { ActionItemState } from "../GlobalConfig";

function ActionItem({ category }: { category: string }) {
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
                    <Move></Move>
                    <Delete onClick={() => DeleteActionItem(item.id)}></Delete>
                </Item>
            ))}
        </Items>
    );
}

export default ActionItem;
