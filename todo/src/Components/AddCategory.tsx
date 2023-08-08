import { useForm } from "react-hook-form";
import { INewInput } from "./CreateItem";
import { useSetRecoilState } from "recoil";
import { ItemBoardState } from "../GlobalConfig";
import { AddCategoryBoard, Form, Input } from "../Styles/CreateItemStyle";

function AddCategory({ display }: { display: number }) {
    const setAllItemBoard = useSetRecoilState(ItemBoardState);
    const { register, handleSubmit, setValue } = useForm<INewInput>();

    function onCreateNewCategorySubmit(data: INewInput) {
        console.log(data.category);
        setValue("category", "");
        setAllItemBoard((prev) => [...prev, data.category as any]);
    }

    return (
        <>
            <AddCategoryBoard
                style={{
                    opacity: display,
                    zIndex: display ? 99 : 0,
                }}
            >
                <Form onSubmit={handleSubmit(onCreateNewCategorySubmit)}>
                    <Input
                        id="categoryInput"
                        {...register("category", {
                            required:
                                "Please enter a new category what you want to add.",
                        })}
                        placeholder="Please entre new category name"
                    ></Input>
                </Form>
            </AddCategoryBoard>
        </>
    );
}

export default AddCategory;
