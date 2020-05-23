import React from 'react'
import Button from '../components/Button'

import {shallow} from 'enzyme'

describe('Test the Button component', () => {

  // TODO what is the wrapper type?
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <Button txt="myText"  className="testClass" onClick={() => console.log('test') } />
    );
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should test the children', () => {
      // console.log('show props',wrapper.props());
      expect(wrapper.prop('children')).toEqual('myText')
  })

  it('should test className', () => {
    expect(wrapper.prop('className')).toEqual('Button testClass')
  })

  it('should test the disabled prop', () => {
    // console.log('show props',wrapper.props());
    expect(wrapper.prop('disabled')).toEqual(false)
  })

})