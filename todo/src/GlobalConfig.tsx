import { atom } from "recoil";

interface ITodo {
    text: string;
    id: number;
    category: "Todo" | "Doing" | "Done";
}

export const TodoState = atom<ITodo[]>({
    key: "todo",
    default: [],
});
