import {List, Map, fromJS} from 'immutable';

/*
CONST
*/

export const INITIAL_STATE = Map();

export function setEntries (state, entries) {
	return state.set('entries', List(entries));
}

export function next (state) {
	const entries = state.get('entries').concat(getWinners(state.get('vote')));
	if (entries.size === 1) {
		return state.remove('entries').remove('vote').set('winner',entries.first());
	} else {
		return state.merge(fromJS({
			vote: {
				pair: entries.take(2)
			},
			entries: entries.skip(2)
		}));
	}
}

export function vote (voteState, entry) {
	return voteState.updateIn(['tally', entry], 0, tally => tally + 1);
}

/*
Not exported functions
*/

function getWinners (vote) {
	if (!vote) return [];
	const [a,b] = vote.get('pair');
	const aVotes = vote.getIn(['tally', a], 0);
	const bVotes = vote.getIn(['tally', b], 0);
	if (aVotes > bVotes) return [a];
	else if (bVotes > aVotes) return [b];
	else return [a,b];
}