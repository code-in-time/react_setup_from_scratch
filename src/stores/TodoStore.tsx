import { observable, action, computed } from 'mobx';
import { ITodo } from '../types';

export default class TodoStore {
  @observable
  data: ITodo[] = [{ID: 1, name:'test', description: 'des', creationDate: new Date()}]

  @action
  addTodo(item: ITodo) {
    this.data.push(item)
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