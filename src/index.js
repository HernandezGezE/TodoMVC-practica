
//import { TodoList } from './classes/todo-list.class.js';
//import { TodoClass } from './classes/todo.class.js';
import {TodoClass, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

