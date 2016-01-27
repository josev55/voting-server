// import {expect} from 'chai';
// import {List, Map} from 'immutable';

// describe('immutable_spec.js', () => {
// 	describe('immutability', () => {
// 		describe('A Number', () => {
// 			function increment(currentState){
// 				return currentState + 1;
// 			}

// 			it('is immutable', () => {
// 				let state = 42;
// 				let nextState = increment(state);
// 				expect(nextState).to.equal(43);

// 			});
// 		});

// 		describe('A List', () => {
// 			function addMovie(currentState, aMovie){
// 				return currentState.push(aMovie);
// 			}

// 			it('is immutable', () => {
// 				let state = List.of('Trainspotting', '28 Days Later');
// 				let nextState = addMovie(state, 'Sunshine');
// 				expect(nextState).to.equal(List.of(
// 					'Trainspotting',
// 					'28 Days Later',
// 					'Sunshine'
// 				));

// 				expect(state).to.equal(List.of(
// 					'Trainspotting',
// 					'28 Days Later'
// 				));
// 			});
// 		});

// 		describe('A Tree', () => {
// 			function addMovie(currentState, aMovie) {
// 				return currentState.set('movies', currentState.get('movies').push(aMovie));
// 			}

// 			it('is immutable', () => {
// 				let state = Map({
// 					movies: List.of('Trainspotting', '28 Days Later')
// 				});
// 				let nextState = addMovie(state, 'Sunshine');

// 				expect(nextState).to.equal(Map({
// 					movies: List.of('Trainspotting','28 Days Later', 'Sunshine')
// 				}));

// 				expect(state).to.equal(Map({
// 					movies: List.of('Trainspotting', '28 Days Later')
// 				}));
// 			});

// 		});
// 	});
// });
