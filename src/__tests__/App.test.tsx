import React from 'react'
import App from '../components/App'
import Main from '../components/Main';
import {shallow} from 'enzyme'

describe(' Test the App component', () => {

  it('test if the App component loads and if it contains the Main component', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find(Main).length).toBe(1)
  })

})