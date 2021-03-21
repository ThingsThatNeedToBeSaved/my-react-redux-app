import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                id: 1,
                title: "Build a Bunker!",
                isDone: false
            },
            {
                id: 2,
                title: "World Domination!",
                isDone: false
            },
            {
                id: 3,
                title: "Spy on the neightbours!",
                isDone: false
            },
            {
                id: 4,
                title: "Get ready for the apocalypse!",
                isDone: false
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state,action) => {
            state.todos.filter(({id}) => id !== action.payload.id);
        }
    }
});

interface State {
    todos: {
        todos: [
            {
                id: number,
                title: string,
                isDone: boolean
            }
        ]
    }
}

export const selectTodos = (state: State) => state.todos;
export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;