import {Map, fromJS} from "immutable";
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer_spec.js', () => {
	describe('reducer', () => {
		it('handles SET_ENTRIES', () => {
			const initialState = Map();
			const action = {
				type: 'SET_ENTRIES',
				entries: ['Trainspotting']
			};
			const nextState = reducer(initialState, action);
			expect(nextState).to.equal(fromJS({
				entries: ['Trainspotting']
			}));
		});

		it('handles NEXT', () => {
			const state = fromJS({
				entries: ['Trainspotting', 'Sunshine']
			});
			const action = {
				type: 'NEXT'				
			};
			const nextState = reducer(state, action);
			expect(nextState).to.equal(fromJS({
				vote: {
					pair: ['Trainspotting', 'Sunshine']
				},
				entries: []
			}));
		});

		it('handles VOTE', () => {
			const state = fromJS({
				vote: {
					pair: ['Trainspotting', 'Sunshine']
				},
				entries: []
			});

			const action = {
				type: 'VOTE',
				entry: 'Trainspotting'
			};

			const nextState = reducer(state, action);

			expect(nextState).to.equal(fromJS({
				vote: {
					pair: ['Trainspotting', 'Sunshine'],
					tally: {
						'Trainspotting': 1
					}
				},
				entries: []
			}));
		})

		it('can be used with reduce', () => {
			const actions = [
				{
					type: 'SET_ENTRIES',
					entries: ['Trainspotting', 'Sunshine']
				},
				{
					type: 'NEXT'
				},
				{
					type: 'VOTE',
					entry: 'Trainspotting'
				},
				{
					type: 'VOTE',
					entry: 'Trainspotting'
				},
				{
					type: 'VOTE',
					entry: 'Sunshine'
				},
				{
					type: 'NEXT'
				}
			];

			const finalState = actions.reduce(reducer, Map());

			expect(finalState).to.equal(fromJS({
				winner: 'Trainspotting'
			}));
		});
	});
});