import { atom } from "recoil";

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
