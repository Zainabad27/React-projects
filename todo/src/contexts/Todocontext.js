import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todo: [{
        id: 1,
        tododata: "",
        completed: false
    }],

    addtodo: (todo_text) => { },
    deletetodo: (id) => { },
    edittodo: (id,text) => { },
    completetodo: (id) => { },

});



export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}