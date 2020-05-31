import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('serchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
    })
    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, { type: CHANGE_SEARCHFIELD, payload: 's' })).toEqual({ searchField: 's' })
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    }
    it('should return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })
    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_PENDING })).toEqual({ robots: [], isPending: true })
    })
    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{ id: 1, name: 'DJ' }]
        })).toEqual({ robots: [{ id: 1, name: 'DJ' }], isPending: false })
    })
    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Error !!!'
        })).toEqual({
            error: 'Error !!!', robots: [], isPending: false
        })
    })
})