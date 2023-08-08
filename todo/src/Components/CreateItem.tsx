import { useForm } from "react-hook-form";
import {
    AddCategoryBoard,
    CreateButton,
    FormContainer,
    Input,
} from "../Styles/CreateItemStyle";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { ItemBoardState } from "../GlobalConfig";

interface INewCategory {
    category: string;
}

function CreateItem() {
    const [categoryBoardDisplay, setCategoryBoardDisplay] = useState(0);

    const setAllItemBoard = useSetRecoilState(ItemBoardState);

    const { register, handleSubmit, setValue } = useForm<INewCategory>();

    function onCreateNewCategoryButtonClick() {
        console.log("create new category button");
        setCategoryBoardDisplay((prev) => (prev ? 0 : 1));
    }

    function onAddNewActionItemButtonClick() {
        console.log("add new action item button");
    }

    function onCreateNewCategorySubmit(data: INewCategory) {
        console.log(data.category);
        setValue("category", "");
        setAllItemBoard((prev) => [...prev, data.category as any]);
    }

    return (
        <FormContainer>
            <CreateButton onClick={onCreateNewCategoryButtonClick}>
                + Create New Category
            </CreateButton>
            <CreateButton onClick={onAddNewActionItemButtonClick}>
                + Add New Action Item
            </CreateButton>

            <AddCategoryBoard
                style={{
                    opacity: categoryBoardDisplay,
                }}
            >
                <form onSubmit={handleSubmit(onCreateNewCategorySubmit)}>
                    <Input
                        {...register("category", {
                            required:
                                "Please enter a new category what you want to add.",
                        })}
                        placeholder="Please entre new category name"
                    ></Input>
                </form>
            </AddCategoryBoard>
        </FormContainer>
    );
}

export default CreateItem;
