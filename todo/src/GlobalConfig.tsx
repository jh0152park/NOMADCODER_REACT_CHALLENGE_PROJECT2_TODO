import { atom, selector } from "recoil";

export enum Categories {
    "Todo" = "Todo",
    "Doing" = "Doing",
    "Done" = "Done",
}

export interface IForm {
    todo: string;
}

export interface ITodo {
    text: string;
    id: number;
    category: Categories;
}

export const TodoState = atom<ITodo[]>({
    key: "todo",
    default: [],
});

export const TodoSelector = selector({
    key: "todoSelector",
    get: ({ get }) => {
        const allTodo = get(TodoState);
        return [
            allTodo.filter((todo) => todo.category === Categories.Todo),
            allTodo.filter((todo) => todo.category === Categories.Doing),
            allTodo.filter((todo) => todo.category === Categories.Done),
        ];
    },
});

// new own my struct
export interface IActionItem {
    id: number;
    category: string;
    actionItem: string;
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
