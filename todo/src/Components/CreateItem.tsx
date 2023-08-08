import {
    AddCategoryBoard,
    CreateButton,
    FormContainer,
    Input,
} from "../Styles/CreateItemStyle";

function CreateItem() {
    function onCreateNewCategoryButtonClick() {
        console.log("create new category button");
    }

    function onAddNewActionItemButtonClick() {
        console.log("add new action item button");
    }

    return (
        <FormContainer>
            <CreateButton onClick={onCreateNewCategoryButtonClick}>
                + Create New Category
            </CreateButton>
            <CreateButton onClick={onAddNewActionItemButtonClick}>
                + Add New Action Item
            </CreateButton>

            <AddCategoryBoard>
                <form>
                    <Input placeholder="Please entre new category name"></Input>
                </form>
            </AddCategoryBoard>
        </FormContainer>
    );
}

export default CreateItem;
