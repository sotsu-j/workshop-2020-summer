import { useState, useReducer } from 'react'
import { createStore, ActionCreator } from 'othello-game-logic'

type Action = {
	type: string
	value: PutStone
}

type PutStone = [number, number, string]

type Store = {
	dispatch: (x?: PutStone) => void
}

const reducer = (store: Store, action: Action) => {
	const { type, value } = action
	switch (type) {
		case 'gameStart':
			store.dispatch(ActionCreator.startGame())
			break
		case 'putStone':
			store.dispatch(ActionCreator.putStone(...value))
			break
		case 'skip':
			store.dispatch(ActionCreator.skip())
			break
		case 'reset':
			store.dispatch(ActionCreator.reset())
			break
	}

	return store
}

export default () => {
	const value = createStore()
	console.log(value)
	const [store, dispatch] = useReducer(reducer, createStore())
	const [stete, setState] = useState(store.getState())

	store.subscribe(value => setState(value))

	return [stete, dispatch]
}