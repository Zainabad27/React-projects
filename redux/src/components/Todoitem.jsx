function TodoItem({ todo }) {
    const todoMsg=todo.todotext;

    return (
        <div
            className={`flex border w-full border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
        >
            
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg text-amber-50`}
                value={todoMsg}
                readOnly={true}
            />
        </div>
    );
}

export default TodoItem;
