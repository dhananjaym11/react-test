import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'
import * as actions from './actions';

const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
    it('check setSearchField', () => {
        expect(actions.setSearchField('s')).toEqual({ type: CHANGE_SEARCHFIELD, payload: 's' })
    })
    it('check requestRobots', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions();
        console.log('action', action)
        expect(action[0]).toEqual({ type: REQUEST_ROBOTS_PENDING })
    })
});