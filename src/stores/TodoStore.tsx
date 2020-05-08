import { observable, action, computed } from 'mobx';
import { ITodo } from '../types';

export default class TodoStore {
  @observable
  data: ITodo[] = 
    [
      {ID: 1, name:'test1', description: 'des1', creationDate: new Date()},
      {ID: 2, name:'test2', description: 'des2', creationDate: new Date()},
      {ID: 3, name:'test3', description: 'des3', creationDate: new Date()},
      {ID: 4, name:'test4', description: 'des4', creationDate: new Date()},
      {ID: 5, name:'test5', description: 'des5', creationDate: new Date()}
    ]

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