import { useForm } from "react-hook-form";
import {
    AddCategoryBoard,
    AddItemBoard,
    CreateButton,
    FormContainer,
    Input,
} from "../Styles/CreateItemStyle";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { ItemBoardState } from "../GlobalConfig";
import AddCategory from "./AddCategory";
import AddItem from "./AddItem";

export interface INewInput {
    category?: string;
    item?: string;
}

function CreateItem() {
    const [itemBoardDisplay, setItemBoardDisplay] = useState(0);
    const [categoryBoardDisplay, setCategoryBoardDisplay] = useState(0);

    function onCreateNewCategoryButtonClick() {
        // when already opened the "AddItemBoard", category board will be not showun
        if (itemBoardDisplay) return;

        console.log("create new category button");
        setCategoryBoardDisplay((prev) => (prev ? 0 : 1));
    }

    function onAddNewActionItemButtonClick() {
        // when already opened the "AddCategoryboard", item board will be not showun
        if (categoryBoardDisplay) return;

        console.log("add new action item button");
        setItemBoardDisplay((prev) => (prev ? 0 : 1));
    }

    function closeInputBoard(
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        const CategoryBox = document.getElementById("categoryBoard");
        const ItemBox = document.getElementById("itemBoard");
        const CategoryInput = document.getElementById("categoryInput");
        const ItemInput = document.getElementById("itemInput");
        const target = event.target;

        switch (target) {
            case CategoryBox:
            case ItemBox:
            case CategoryInput:
            case ItemInput:
                console.log("Things clicked");
                break;
            default:
                console.log("out sitde clicked");
                setItemBoardDisplay(0);
                setCategoryBoardDisplay(0);
                break;
        }
    }

    return (
        <FormContainer onClick={(e) => closeInputBoard(e)}>
            <CreateButton
                id="categoryBoard"
                onClick={onCreateNewCategoryButtonClick}
            >
                + Create New Category
            </CreateButton>
            <CreateButton
                id="itemBoard"
                onClick={onAddNewActionItemButtonClick}
            >
                + Add New Action Item
            </CreateButton>

            <AddCategory display={categoryBoardDisplay}></AddCategory>
            <AddItem display={itemBoardDisplay}></AddItem>
        </FormContainer>
    );
}

export default CreateItem;
