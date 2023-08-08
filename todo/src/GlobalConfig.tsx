import { atom } from "recoil";

// new own my struct

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

export const ItemBoardState = atom({
    key: "allItemBoard",
    default: [Categories.Todo, Categories.Doing, Categories.Done],
});

export const CategoryState = atom<Categories>({
    key: "category",
    default: Categories.Todo,
});

export const ActionItemState = atom<IActionItem[]>({
    key: "actionItemState",
    default: [],
});
