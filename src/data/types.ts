type Todo = {
    id: number;
    name: string;
    description: string;
    checked: boolean;
};
interface AddTodoPanelProps {
    mode: 'add';
    addTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

interface EditTodoPanelProps {
    mode: 'edit';
    editTodo: Omit<Todo, 'id' | 'checked'>;
    changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

interface TodoListProps {
    todoIdForEdit: Todo['id'] | null;
    todos: Todo[];
    deleteTodo: (id: Todo['id']) => void;
    checkTodo: (id: Todo['id']) => void;
    selectTodoIdForEdit: (id: Todo['id']) => void;
    changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: Todo['id']) => void;
    checkTodo: (id: Todo['id']) => void;
    selectTodoIdForEdit: (id: Todo['id']) => void;
}

interface HeaderProps {
    todoCount: number;
}

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'orange' | 'blue' | 'red';
  }
