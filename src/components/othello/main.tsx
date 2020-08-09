import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import GameBoard from './GameBoard/Board'
import useOthello from './useOthello'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: '100vh',
	},
}))

export default () => {
	const [state] = useOthello()
	const { board } = state
	const classes = useStyles()

	const handleClickSquare = () => { }
	
	return (
		<div className={classes.root}>
			<GameBoard board={board} onClick={handleClickSquare} />
		</div>
	)
}

