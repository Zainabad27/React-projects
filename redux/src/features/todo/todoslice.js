import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addtodo: (state, action) => {
            const todo = { id: nanoid(), todotext: action.payload, completed: false };

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
                single_todo.id === id ? { ...single_todo, todotext: text } : single_todo
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

