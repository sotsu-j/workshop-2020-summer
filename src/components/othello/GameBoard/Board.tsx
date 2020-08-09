import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Square from './Square'
import { Board } from '../@types'

type Props = {
	board: Board
	width?: number
	onClick: () => void
}

const useStyles = makeStyles(() => ({
	root: {
		maxWidth: '100vmin',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		height: '12.5%',
	},
}))

export default ({ board, width = 420, onClick }: Props) => {
	const classes = useStyles()

	return (
		<div className={classes.root} style={{ width, height: width }}>
			{board.map((row, rowIndex) => {
				return (
					<div key={rowIndex} className={classes.row}>
						{
							row.map((col, colIndex) => {
								return <Square
									key={colIndex}
									row={rowIndex}
									col={colIndex}
									stone={col}
									onClick={col === 0 ? onClick : () => { }}
								/>
							})
						}
					</div>
				)
			})}
		</div>
	)
}
