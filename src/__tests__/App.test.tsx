import React from 'react'
import App from '../components/App'
import {shallow} from 'enzyme'

describe(' Test the App component', () => {

  it('test if the App component loads', () => {
    let wrapper = shallow(<App />);
    expect(1).toEqual(1)
  })

})