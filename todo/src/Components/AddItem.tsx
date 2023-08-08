import { useForm } from "react-hook-form";
import { INewInput } from "./CreateItem";
import { AddItemBoard, Form, Input } from "../Styles/CreateItemStyle";
import { ItemBoardState } from "../GlobalConfig";
import { useRecoilValue } from "recoil";

function AddItem({ display }: { display: number }) {
    const categories = useRecoilValue(ItemBoardState);
    const { register, handleSubmit, setValue } = useForm<INewInput>();

    function onAddItemSubmit(data: INewInput) {
        console.log(data.item);
        setValue("item", "");
    }

    //     <select value={category} onInput={onInput}>
    //         <option value={Categories.Todo}>Todo</option>
    //         <option value={Categories.Doing}>Doing</option>
    //         <option value={Categories.Done}>Done</option>
    //     </select>

    return (
        <>
            <AddItemBoard
                style={{
                    opacity: display,
                    zIndex: display ? 99 : 0,
                }}
            >
                <Form onSubmit={handleSubmit(onAddItemSubmit)}>
                    <Input
                        id="itemInput"
                        {...register("item", {
                            required:
                                "Please enter a new item what you want to add.",
                        })}
                        placeholder="Please entre new action item"
                    ></Input>

                    <select>
                        {categories.map((category) => (
                            <option>{category}</option>
                        ))}
                    </select>
                </Form>
            </AddItemBoard>
        </>
    );
}

export default AddItem;
