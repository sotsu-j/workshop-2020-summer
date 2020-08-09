import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'

import { stone } from '../@types'

type Props = {
	stone: stone
	row: number
	col: number
	onClick: () => void
}

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '12.5%',
		backgroundColor: 'lightgray',
		boxSizing: 'content-box',
	},
	white: {
		backgroundColor: 'white',
	},
	black: {
		backgroundColor: 'black',
	},
}))

export default ({ stone, ...props }: Props) => {
	const classes = useStyles()

	const makeStone = (stoneKey: stone) => {
		switch (stoneKey) {
			default: return null
			case 1: return <Avatar className={classes.white} />
			case -1: return <Avatar className={classes.black} />
		}
	}
	return (
		<Box border={1} className={classes.root} {...props}>{makeStone(stone)}</Box>
	)
}
