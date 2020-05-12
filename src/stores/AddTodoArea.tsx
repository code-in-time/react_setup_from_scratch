import { observable, action } from 'mobx';

class AddTodoArea {

  @observable
  name: string = ''

  @observable
  description: string = ''

  @action
  reset() {
    this.name = ''
    this.description = ''
  }

  @action
  addName(name: string) {
    this.name = name
  }

  @action
  addDescription(description: string) {
    this.description = description
  }
}

export default new AddTodoArea()