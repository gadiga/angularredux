import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../redux/store';
import { ITodo } from '../redux/todo';
import { REMOVE_TODO, ADD_TODO, TOGGLE_TODO } from '../redux/actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @select('todos') todoList: ITodo[];

  model: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  }
  
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  deleteTodo(todo: ITodo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id});
  }

  addTodo() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }

  toggleTodo(todo: ITodo) {
    this.ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id});
  }

}
