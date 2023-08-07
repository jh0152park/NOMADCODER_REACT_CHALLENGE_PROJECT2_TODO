import { atom, selector } from "recoil";

export interface IForm {
    todo: string;
}

export interface ITodo {
    text: string;
    id: number;
    category: "Todo" | "Doing" | "Done";
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
            allTodo.filter((todo) => todo.category === "Todo"),
            allTodo.filter((todo) => todo.category === "Doing"),
            allTodo.filter((todo) => todo.category === "Done"),
        ];
    },
});
