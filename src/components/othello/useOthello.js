import { useState, useReducer } from 'react'
import { createStore, ActionCreator } from 'othello-game-logic'

const reducer = (store = {}, action) => {
	const { type, value } = action
	const actions = {
		'gameStart': () => store.dispatch(ActionCreator.startGame()),
		'putStone': () => store.dispatch(ActionCreator.putStone(...value)),
		'skip': () => store.dispatch(ActionCreator.skip()),
		'reset': () => store.dispatch(ActionCreator.reset()),
	}
	actions[type]()
	
	return store
}

export default () => {
	const [store, dispatch] = useReducer(reducer, createStore())
	const [stete, setState] = useState(store.getState())

	store.subscribe(value => setState(value))

	return [stete, dispatch]
}
