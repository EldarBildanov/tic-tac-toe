class TicTacToe {
    constructor() {
        this.grid = [[null, null, null], [null, null, null], [null, null, null]]
        this.cPlayer = 'x'

    }

    getCurrentPlayerSymbol() {
        return this.cPlayer
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.grid[rowIndex][columnIndex] == null) {
            this.grid[rowIndex][columnIndex] = this.cPlayer
            if (this.cPlayer == 'x') this.cPlayer = 'o'
            else this.cPlayer = 'x'
        } 
        
    }

    isWin() {
        let tempArr = [[0,0,0],[0,0,0],[0,0,0]]
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.grid[i][j] == 'x') tempArr[i][j] = 1
                if (this.grid[i][j] == 'o') tempArr[i][j] = -1
            }
        }

        for (let i = 0; i < 3; i++) {
            let sRow = [0,0,0]
            let sCol = [0,0,0]
            for (let j = 0; j < 3; j++) {
                sRow[i] = sRow[i] + tempArr[i][j]
                sCol[i] = sCol[i] + tempArr[j][i]
            }

            if (Math.abs(sRow[i]) == 3 || Math.abs(sCol[i]) == 3) return true
        }

        let sDiag = [0,0]
        for (let i = 0; i < 3; i++) {
            sDiag[0] = sDiag[0] + tempArr[i][i]
            sDiag[1] = sDiag[1] + tempArr[i][2-i]
        }

        if (Math.abs(sDiag[0]) == 3 || Math.abs(sDiag[1]) == 3) return true

        return false
    }

    isFinished() {
        if (this.isWin() || this.isDraw()) return true
        return false
    }

    getWinner() {
        let won
        if (this.cPlayer == 'x') won = 'o'
        if (this.cPlayer == 'o') won = 'x'
        if (this.isWin()) return won
        return null
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (this.grid[i][j] == null) return false
        return true

    }

    isDraw() {
        if (this.noMoreTurns() && !this.isWin()) return true
        return false
    }

    getFieldValue(rowIndex, colIndex) {
        return this.grid[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
