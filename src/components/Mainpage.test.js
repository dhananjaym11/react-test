import { shallow } from 'enzyme';
import React from 'react';
import Mainpage from './Mainpage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [
            { id: 1, name: 'aa', email: 'aa@gmail.com' },
            { id: 2, name: 'bb', email: 'bb@gmail.com' }
        ],
        searchField: 'a',
        isPending: false
    }

    wrapper = shallow(<Mainpage {...mockProps} />)
})

it('Render component', () => {
    expect(wrapper).toMatchSnapshot();
})

it('Filter correctly', () => {
    expect(wrapper.instance().getFilteredRobots()).toEqual([{ id: 1, name: 'aa', email: 'aa@gmail.com' }]);
})