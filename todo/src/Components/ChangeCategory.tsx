import { useRecoilValue } from "recoil";
import { ItemBoardState } from "../GlobalConfig";
import { CategoriesList, Category } from "../Styles/ActionItemStyle";

function ChangeCategory({ id, display }: { id: number; display: number }) {
    const categories = useRecoilValue(ItemBoardState);

    function onCategoryButtonClick(category: string) {
        console.log("onCategoryButtonClick: " + category);
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
