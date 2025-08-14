import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const todoslice = createSlice({
    name: todo,
    initialState: {
        todos: [{ id: nanoid(), todoetext: "hello world", completed: false }]
    },
    reducers: {
        addtodo: (state, action) => {
            const todo = { id: nanoid(), todoetext: action.payload, completed: false };

            state.todos.push(todo);
        },


        deletetodo: (state, action) => {
            const id = action.payload;
           state.todos= state.todos.filter((single_todo) => single_todo.id !== id);
        },

        edittodo: (state, action) => {
            const id = action.payload.id;
            const text = action.payload.text;

            state.todos= state.todos.map((single_todo) => (
                single_todo.id === id ? { ...single_todo, todoetext: text } : single_todo
            ));

        },
        compeletetodo: (state, action) => {
            const id = action.payload;

            state.todos= state.todos.map((single_todo) => (single_todo.id === id ? { ...single_todo, completed: true } : single_todo));
        }

    }
});

export const  { edittodo, deletetodo, addtodo,compeletetodo }=todoslice.actions;
export default todoslice.reducer ;

