import React from 'react'
import {mount} from 'enzyme'
import 'mobx-react/batchingForReactDom'
import AddTodoArea from '../components/AddTodoArea'
import App from '../components/App'


describe('Test the AddTodoArea component', () => {

  // TODO what is the wrapper type?
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <App />
      // <AddTodoArea />
    );
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it.only('should test the name input', () => {
      const nameInput = wrapper.find('input[placeholder="Name"]')
var s  = nameInput.html()

      nameInput.simulate('change', {
        target: { value: 'new comment' } , 
        currentTarget: {tagName: 'new commentTagName'} });
        // console.log('nameInput', nameInput.props())
    //   // console.log('yyyyyyyyy',wrapper.state())
      wrapper.update()

    //   // expect(wrapper.find('input').at(0).prop('value')).toEqual('new comment')
      console.log('xxxxxxxxxx', nameInput.props().value)
      // expect(nameInput.prop('value')).toEqual('new comment')
  })

  // it('should test for the text "Add a todo please"', () => {
  //   let s = wrapper.find('strong')
  //     expect(s.text()).toEqual('Add a todo please')
  // })

})