import { observable, action, computed } from 'mobx';
import { ITodo } from '../types';

class TodoStore {
  @observable
  data: ITodo[] = []

  @action
  reset() {
    this.data = []
  }

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
    // console.log('match', index)
    this.data.splice(index, 1)
  }

  @action
  updateTodo(ID: number, name: string, desc: string) {

    const index = this.data.findIndex(v => v.ID === ID)
    // console.log('match', index)
    const item: ITodo = this.data[index]
    item.name = name
    item.description = desc
    item.creationDate = new Date()

  }
}



export default new TodoStore()