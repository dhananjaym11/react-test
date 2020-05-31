import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './counterButton';

it('Test CounterButton component', () => {
    const mockProps = { color: 'red' }
    expect(shallow(<CounterButton props={mockProps} />)).toMatchSnapshot();
})

it('Test CounterButton increment', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().color).toEqual('red');
})