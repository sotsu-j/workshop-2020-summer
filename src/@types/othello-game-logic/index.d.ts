declare module 'othello-game-logic'

declare type stone = 0 | 1 | -1

declare type placeableCell = { x: number, y: number }

declare type placeableCells = placeableCell[]


type State = {
	gameState: "init" // 始まる前
	| "white"// 白のターン
	| "black"// 黒のターン
	| "win-white"// 白の勝ち
	| "win-black"// 黒の勝ち
	| "draw"  //引き分け

	// 盤面の状態
	board: stone[][],

	// プレイヤー情報
	white: {
		placeableCells: placeableCells
		name: "white" // プレイヤーの名前
	},
	black: {
		placeableCells: placeableCells
		name: "black"
	},
}

declare function createStore(): {
	_state: State
	subscribe: (func: (state: State) => void) => void
	getState: () => State
}

declare type ActionCreator = {
	gameStart: () => void
	putStone: (a: number, b: number, c: string) => void
	skip: () => void
	reset: () => void
}
