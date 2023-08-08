import { useForm } from "react-hook-form";
import { INewInput } from "./CreateItem";
import { AddItemBoard, Form, Input } from "../Styles/CreateItemStyle";
import {
    ActionItemState,
    CategoryState,
    IActionItem,
    ItemBoardState,
} from "../GlobalConfig";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function AddItem({ display }: { display: number }) {
    const categories = useRecoilValue(ItemBoardState);
    const [allActionItems, setAllActionItems] = useRecoilState(ActionItemState);
    const [currentCategory, setCurrentCategory] = useRecoilState(CategoryState);

    const { register, handleSubmit, setValue } = useForm<INewInput>();

    function onAddItemSubmit(data: INewInput) {
        const newActionItem: string = data.item as string;
        // console.log(data.item);
        setValue("item", "");
        setAllActionItems((prev) => [
            ...prev,
            {
                id: Date.now(),
                category: currentCategory,
                actionItem: newActionItem,
            },
        ]);
    }

    function onInput(event: React.FormEvent<HTMLSelectElement>) {
        // default is Todo
        console.log(`selected category: ${event.currentTarget.value}`);
        setCurrentCategory(event.currentTarget.value as any);
    }

    console.log(allActionItems);

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

                    <select onInput={onInput}>
                        {categories.map((category) => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
                </Form>
            </AddItemBoard>
        </>
    );
}

export default AddItem;
