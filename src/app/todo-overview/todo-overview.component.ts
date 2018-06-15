import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../redux/store';
import { ITodo } from '../redux/todo';
import { ADD_TODO, REMOVE_ALL_TODOS } from '../redux/actions';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {

  @select('todos') todoList: ITodo[];
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit(todo: ITodo) {
    this.ngRedux.dispatch({type: ADD_TODO, todo: todo});
  }

  clearAllTodos () {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }

}
