import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('Test cardlist component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Test',
            email: 'test@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})