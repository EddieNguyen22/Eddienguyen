const TodoBody = ({todo1,todo2,todo3,todo4,todo5 }) => {
    return (
            <div>
                {todo1}
                {todo2}
                {todo3}
                {todo4}
                {todo5}
            </div>
    )
}

const TodoData = () => {
    return (
        <form>
        <input className="todo-input" type="text" placeholder="Enter your task here" />
        <div className="todo-task">
            <input name="checkbox" type="radio"/>
            <TodoBody todo1="Clean up bedroom"/>
        </div>
        <div className="todo-task">
            <input name="checkbox" type="radio"/>
            <TodoBody todo1="Buy some milk"/>
        </div>
        <div className="todo-task">
            <input name="checkbox" type="radio"/>
            <TodoBody todo1="Jogging"/>
        </div>
        <div className="todo-task">
            <input name="checkbox" type="radio" />
            <TodoBody todo1="Learn React"/>
        </div>
        <div className="todo-task">
            <input name="checkbox" type="radio"/>
            <TodoBody todo1="Doing Excercises"/>
        </div>
        <div class="todo-bottom">
            <span>5 tasks left!</span> 
            <span>Mindx todolist</span> 
        </div>
        </form>
    )
}

export default TodoData; 