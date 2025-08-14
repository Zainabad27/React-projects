import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addtodo } from "../features/todo/todoslice.js";
function TodoForm() {
    const [input, setinput] = useState("")
    const Dispatch=useDispatch()
    const submithandler = (e) => {
        e.preventDefault();
        if(input==="") return;
        Dispatch(addtodo(input));
        setinput("");

    }


    return (
        <form className="flex" onSubmit={submithandler}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(e) => {
                    setinput(e.target.value);
                }}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

