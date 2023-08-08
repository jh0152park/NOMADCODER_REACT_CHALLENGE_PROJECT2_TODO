import { useRecoilValue } from "recoil";
import { Item, Items } from "../Styles/ActionItemStyle";
import { ActionItemState } from "../GlobalConfig";

function ActionItem({ category }: { category: string }) {
    const allActionItems = useRecoilValue(ActionItemState);
    const categoryActionItems = allActionItems.filter(
        (item) => item.category === category
    );

    return (
        <Items>
            {categoryActionItems.map((item) => (
                <Item key={item.id}>{item.actionItem}</Item>
            ))}
        </Items>
    );
}

export default ActionItem;
