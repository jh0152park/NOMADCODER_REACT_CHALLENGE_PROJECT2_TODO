import { useRecoilValue } from "recoil";
import { ItemBoardState } from "../GlobalConfig";
import { CategoriesList } from "../Styles/ActionItemStyle";

function ChangeCategory({ id, display }: { id: number; display: number }) {
    const categories = useRecoilValue(ItemBoardState);

    return (
        <CategoriesList display={display}>
            {categories.map((category) => (
                <p>{category}</p>
            ))}
        </CategoriesList>
    );
}

export default ChangeCategory;
