import { observable, action, computed } from 'mobx';
import { ITodo } from '../types';

export default class TodoStore {
  @observable
  data: ITodo[] = []

  @action
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

  @action
  deleteTodo(ID: number) {

    const index = this.data.findIndex(v => v.ID === ID)
    console.log('match', index)
    this.data.splice(index, 1)
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