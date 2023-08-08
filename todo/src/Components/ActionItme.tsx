import { useRecoilState, useRecoilValue } from "recoil";
import {
    CategoriesList,
    Container,
    Delete,
    Item,
    Items,
    Move,
} from "../Styles/ActionItemStyle";
import { ActionItemState } from "../GlobalConfig";
import ChangeCategory from "./ChangeCategory";

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

    function onCategoryChageButtonClick(targetId: number) {
        const newActionItemsState = allActionItems.map((item) =>
            item.id !== targetId
                ? item
                : {
                      id: item.id,
                      category: item.category,
                      actionItem: item.actionItem,
                      showCategoriesBoard: item.showCategoriesBoard ? 0 : 1,
                  }
        );
        setAllActionItems(newActionItemsState);
    }

    return (
        <Container>
            <Items>
                {categoryActionItems.map((item) => (
                    <Item key={item.id}>
                        {item.actionItem}
                        <Move
                            onClick={() => onCategoryChageButtonClick(item.id)}
                        ></Move>
                        <Delete
                            onClick={() => DeleteActionItem(item.id)}
                        ></Delete>
                        <ChangeCategory
                            id={item.id as number}
                            display={item.showCategoriesBoard}
                        ></ChangeCategory>
                    </Item>
                ))}
            </Items>
        </Container>
    );
}

export default ActionItem;
