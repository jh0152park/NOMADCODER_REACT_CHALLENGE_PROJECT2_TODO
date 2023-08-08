import { useForm } from "react-hook-form";
import { INewInput } from "./CreateItem";
import { AddItemBoard, Input } from "../Styles/CreateItemStyle";

function AddItem({ display }: { display: number }) {
    const { register, handleSubmit, setValue } = useForm<INewInput>();

    function onAddItemSubmit(data: INewInput) {
        console.log(data.item);
        setValue("item", "");
    }

    return (
        <AddItemBoard
            style={{
                opacity: display,
            }}
        >
            <form onSubmit={handleSubmit(onAddItemSubmit)}>
                <Input
                    id="itemInput"
                    {...register("item", {
                        required:
                            "Please enter a new item what you want to add.",
                    })}
                    placeholder="Please entre new action item"
                ></Input>
            </form>
        </AddItemBoard>
    );
}

export default AddItem;
