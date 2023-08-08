import { useForm } from "react-hook-form";
import { INewInput } from "./CreateItem";
import { AddItemBoard, Form, Input } from "../Styles/CreateItemStyle";
import { useRef } from "react";

function AddItem({ display }: { display: number }) {
    const { register, handleSubmit, setValue } = useForm<INewInput>();

    function onAddItemSubmit(data: INewInput) {
        console.log(data.item);
        setValue("item", "");
    }

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
                </Form>
            </AddItemBoard>
        </>
    );
}

export default AddItem;
