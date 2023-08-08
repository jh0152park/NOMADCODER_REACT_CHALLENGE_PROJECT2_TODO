import { useRecoilState, useRecoilValue } from "recoil";
import { ActionItemState, ItemBoardState } from "../GlobalConfig";
import { CategoriesList, Category } from "../Styles/ActionItemStyle";

function ChangeCategory({ id, display }: { id: number; display: number }) {
    const categories = useRecoilValue(ItemBoardState);
    const [allActionItems, setAllActionItems] = useRecoilState(ActionItemState);

    function onCategoryButtonClick(category: string) {
        console.log("onCategoryButtonClick: " + category);
        const newActionItemsState = allActionItems.map((item) =>
            item.id !== id
                ? item
                : {
                      id: item.id,
                      category: category,
                      actionItem: item.actionItem,
                      showCategoriesBoard: 0,
                  }
        );
        setAllActionItems(newActionItemsState);
    }

    return (
        <CategoriesList display={display}>
            {categories.map((category) => (
                <Category onClick={() => onCategoryButtonClick(category)}>
                    {category}
                </Category>
            ))}
        </CategoriesList>
    );
}

export default ChangeCategory;
