import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Itodo} from '../itodo';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  userInput = new FormControl();

  todos: Array<Itodo> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(): any {
    const {value} = this.userInput;
    if (value) {
      const todo: Itodo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i): any {
    this.todos[i].complete = !this.todos[i].complete;
  }


}
