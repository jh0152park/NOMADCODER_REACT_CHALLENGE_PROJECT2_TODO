import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export enum Categories {
    "Todo" = "Todo",
    "Doing" = "Doing",
    "Done" = "Done",
}
export interface IActionItem {
    id: number;
    category: string;
    actionItem: string;
    showCategoriesBoard: number;
}

export const ItemBoardState = atom<string[]>({
    key: "allItemBoard",
    default: [Categories.Todo, Categories.Doing, Categories.Done],
    //default: ["Todo", "Doing", "Done"],
    effects_UNSTABLE: [persistAtom],
});

export const CategoryState = atom({
    key: "category",
    default: Categories.Todo,
});

export const ActionItemState = atom<IActionItem[]>({
    key: "actionItemState",
    default: [],
    effects_UNSTABLE: [persistAtom],
});
