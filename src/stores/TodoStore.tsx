import { observable, action, computed } from 'mobx';
import { ITodo } from '../types';

export default class TodoStore {
  @observable
  data: ITodo[] = []

  @action.bound
  addTodo(name: string, desc: string) {
    const todo: ITodo =
      {
        ID: Math.floor((Math.random() * 8000) + 1),
        name: name,
        description: desc,
        creationDate: new Date()
      }
    this.data.push(todo)
  }

  // @action
  // decrement() {
  //   this.count--
  // }

  // @computed
  // get doubleCount() {
  //   return this.count * 2
  // }
}