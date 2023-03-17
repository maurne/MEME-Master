class MemeMasters {
    constructor(boardSize = 10) {
      this.boardSize = boardSize;
      this.gameBoard = document.getElementById("game-board");
      this.turn = "teamA";
      this.frozenPieces = new Map();
      this.effectSquares = new Map();
  
      this.initGameBoard();
      this.initPieces();
      this.initMemeSquares();
      this.currentPlayer = 1;

   
      
      this.initialPiecePositions = [
        // Add all the initial piece positions from previous response
        { index: 20, type: 'influencer', player: 1 },
        { index: 21, type: 'influencer', player: 1 },
        { index: 22, type: 'influencer', player: 1 },
        { index: 23, type: 'influencer', player: 1 },
        { index: 24, type: 'influencer', player: 1 },
        { index: 25, type: 'influencer', player: 1 },
        { index: 26, type: 'influencer', player: 1 },
        { index: 27, type: 'influencer', player: 1 },
        { index: 28, type: 'influencer', player: 1 },
        { index: 29, type: 'influencer', player: 1 },
      
        // Influencers (Pawns) for Player 2
        { index: 70, type: 'influencer', player: 2 },
        { index: 71, type: 'influencer', player: 2 },
        { index: 72, type: 'influencer', player: 2 },
        { index: 73, type: 'influencer', player: 2 },
        { index: 74, type: 'influencer', player: 2 },
        { index: 75, type: 'influencer', player: 2 },
        { index: 76, type: 'influencer', player: 2 },
        { index: 77, type: 'influencer', player: 2 },
        { index: 78, type: 'influencer', player: 2 },
        { index: 79, type: 'influencer', player: 2 },
       // Other pieces for Player 1
  { index: 10, type: 'gamer', player: 1 },
  { index: 19, type: 'gamer', player: 1 },
  { index: 11, type: 'streamer', player: 1 },
  { index: 18, type: 'streamer', player: 1 },
  { index: 12, type: 'youtuber', player: 1 },
  { index: 17, type: 'youtuber', player: 1 },
  { index: 13, type: 'emoji_wizard', player: 1 },
  { index: 14, type: 'meme_king', player: 1 },

  // Other pieces for Player 2
  { index: 80, type: 'gamer', player: 2 },
  { index: 89, type: 'gamer', player: 2 },
  { index: 81, type: 'streamer', player: 2 },
  { index: 88, type: 'streamer', player: 2 },
  { index: 82, type: 'youtuber', player: 2 },
  { index: 87, type: 'youtuber', player: 2 },
  { index: 83, type: 'emoji_wizard', player: 2 },
  { index: 84, type: 'meme_queen', player: 2 },

  { index: 32, type: 'meme_square', effect: 'swap' },
  { index: 37, type: 'meme_square', effect: 'teleport' },
  { index: 42, type: 'meme_square', effect: 'freeze' },
  { index: 47, type: 'meme_square', effect: 'reverse' },

];
      this.selectedPiece = null;
    }
  
    createBoard() {
      for (let i = 0; i < this.boardSize * this.boardSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("click", () => this.handleSquareClick(i));
        this.gameBoard.appendChild(square);
      }
    }
  
    setupPieces() {
      this.initialPiecePositions.forEach((piecePosition) => {
        if (piecePosition.type === 'meme_square') {
          this.gameBoard.children[piecePosition.index].classList.add('meme-square', piecePosition.effect);
        } else {
          // ...
        }
        const piece = document.createElement("div");
        piece.classList.add("piece");
        piece.textContent = piecePosition.type.charAt(0).toUpperCase();
        piece.style.backgroundColor = piecePosition.player === 1 ? "#f00" : "#00f";
        this.gameBoard.children[piecePosition.index].appendChild(piece);
      });
    }
  
    handleSquareClick(index) {
      const square = this.gameBoard.children[index];
      const piece = square.querySelector(".piece");
  
      if (this.selectedPiece && !piece) {
        if (this.isValidMove(index)) {
          this.movePiece(square);
          this.applyMemeSquareEffect(index);
          this.switchPlayer();
        
          const winner = this.detectWinCondition();
      if (winner !== null) {
        alert(`Player ${winner} wins!`);
      }
        }
      } else if (piece) {
        this.selectPiece(piece);
      }
    }
  
    selectPiece(piece) {
      if (this.selectedPiece) {
        this.selectedPiece.classList.remove("selected");
      }
  
      this.selectedPiece = piece;
      this.selectedPiece.classList.add("selected");
    }
    
    getSquareIndex(square) {
      return Array.from(this.gameBoard.children).indexOf(square);
    }
  
    getPieceType(piece) {
      const type = this.initialPiecePositions.find(
        (position) => position.index === this.getSquareIndex(piece.parentElement)
      ).type;
      return type;
    }
  
    getPiecePlayer(piece) {
      const player = this.initialPiecePositions.find(
        (position) => position.index === this.getSquareIndex(piece.parentElement)
      ).player;
      return player;
    }
  
    switchPlayer() {
      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }
  























    initGameBoard() {
      for (let i = 0; i < this.boardSize * this.boardSize; i++) {
        const square = document.createElement("div");
        square.className = "square";
        this.gameBoard.appendChild(square);
      }
    
      this.gameBoard.style.gridTemplateColumns = `repeat(${this.boardSize}, 1fr)`;
      this.gameBoard.style.gridTemplateRows = `repeat(${this.boardSize}, 1fr)`;
    }
    
  
    initPieces() {
      // ...
    }
  
    initMemeSquares() {
      // ...
    }
  
    getPieceColor(team) {
      // ...
    }
  
    isPathClear(sourceIndex, targetIndex) {
      // ...
    }
  
    isValidMove(sourceIndex, targetIndex) {
      const piece = this.gameBoard.children[sourceIndex].querySelector(".piece");
  
      if (targetPiece && this.getPiecePlayer(targetPiece) === player) {
        return false;
      }
      // Return false if the piece is frozen
      if (piece.dataset.frozen === "true") {
        return false;
      }
      const sourceIndex = this.getSquareIndex(this.selectedPiece.parentElement);
      const pieceType = this.getPieceType(this.selectedPiece);
      const player = this.getPiecePlayer(this.selectedPiece);
  
      // Implement logic to check if the move is valid based on piece type
      switch (pieceType) {
        case "influencer":
          return this.isValidMoveInfluencer(sourceIndex, targetIndex, player);
          case "gamer":
            return this.isValidMoveGamer(sourceIndex, targetIndex);
          case "streamer":
            return this.isValidMoveStreamer(sourceIndex, targetIndex);
          case "youtuber":
            return this.isValidMoveYoutuber(sourceIndex, targetIndex);
          case "emoji_wizard":
            return this.isValidMoveEmojiWizard(sourceIndex, targetIndex);
          case "meme_king":
          case "meme_queen":
            return this.isValidMoveMemeKingOrQueen(sourceIndex, targetIndex);
        // Add other piece types and their move validation logic here
        default:
          return false;
      }
      // ...
    }
  
    isPathClear(sourceIndex, targetIndex) {
      const sourceRow = Math.floor(sourceIndex / this.boardSize);
      const sourceCol = sourceIndex % this.boardSize;
      const targetRow = Math.floor(targetIndex / this.boardSize);
      const targetCol = targetIndex % this.boardSize;
  
      let rowStep = 0;
      let colStep = 0;
  
      if (sourceRow < targetRow) {
        rowStep = 1;
      } else if (sourceRow > targetRow) {
        rowStep = -1;
      }
  
      if (sourceCol < targetCol) {
        colStep = 1;
      } else if (sourceCol > targetCol) {
        colStep = -1;
      }
  
      let rowIndex = sourceRow + rowStep;
      let colIndex = sourceCol + colStep;
  
      while (rowIndex !== targetRow || colIndex !== targetCol) {
        const index = rowIndex * this.boardSize + colIndex;
        const piece = this.gameBoard.children[index].querySelector(".piece");
  
        if (piece) {
          return false;
        }
  
        rowIndex += rowStep;
        colIndex += colStep;
      }
  
      return true;
    }
  
    isValidMoveInfluencer(sourceIndex, targetIndex, player) {
      const rowDiff = Math.abs(Math.floor(sourceIndex / this.boardSize) - Math.floor(targetIndex / this.boardSize));
      const colDiff = Math.abs((sourceIndex % this.boardSize) - (targetIndex % this.boardSize));
  
      if (player === 1) {
        return (rowDiff === 1 && colDiff === 0) || (rowDiff === 1 && colDiff === 1);
      } else {
        return (rowDiff === -1 && colDiff === 0) || (rowDiff === -1 && colDiff === 1);
      }
      return (rowDiff <= 2 && colDiff <= 2) && this.isPathClear(sourceIndex, targetIndex);

    }
  
  
    isValidMoveGamer(sourceIndex, targetIndex) {
      // Custom move logic for Gamer (similar to a knight in chess)
      const rowDiff = Math.abs(Math.floor(sourceIndex / this.boardSize) - Math.floor(targetIndex / this.boardSize));
      const colDiff = Math.abs((sourceIndex % this.boardSize) - (targetIndex % this.boardSize));
  
      return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
    }
  
    isValidMoveStreamer(sourceIndex, targetIndex) {
      // Custom move logic for Streamer (similar to a bishop in chess)
      const rowDiff = Math.abs(Math.floor(sourceIndex / this.boardSize) - Math.floor(targetIndex / this.boardSize));
      const colDiff = Math.abs((sourceIndex % this.boardSize) - (targetIndex % this.boardSize));
  
      return rowDiff === colDiff && this.isPathClear(sourceIndex, targetIndex);
    }
  
    isValidMoveYoutuber(sourceIndex, targetIndex) {
      // Custom move logic for Youtuber (similar to a rook in chess)
      const rowDiff = Math.abs(Math.floor(sourceIndex / this.boardSize) - Math.floor(targetIndex / this.boardSize));
      const colDiff = Math.abs((sourceIndex % this.boardSize) - (targetIndex % this.boardSize));
  
      return ((rowDiff === 0 && colDiff > 0) || (rowDiff > 0 && colDiff === 0)) && this.isPathClear(sourceIndex, targetIndex);

    }
  
    isValidMoveEmojiWizard(sourceIndex, targetIndex) {
      // Custom move logic for Emoji Wizard (similar to a king in chess)
      const rowDiff = Math.abs(Math.floor(sourceIndex / this.boardSize) - Math.floor(targetIndex / this.boardSize));
      const colDiff = Math.abs((sourceIndex % this.boardSize) - (targetIndex % this.boardSize));
  
      return (rowDiff <= 1 && colDiff <= 1);
    }
  
    isValidMoveMemeKingOrQueen(sourceIndex, targetIndex) {
      // Custom move logic for Meme King/Queen (similar to a queen in chess)
      return (this.isValidMoveYoutuber(sourceIndex, targetIndex) && this.isPathClear(sourceIndex, targetIndex)) ||
      (this.isValidMoveStreamer(sourceIndex, targetIndex) && this.isPathClear(sourceIndex, targetIndex));

    }
  
    swapEffect(sourceIndex, targetIndex) {
      const sourcePiece = this.gameBoard.children[sourceIndex].querySelector(".piece");
      const targetPiece = this.gameBoard.children[targetIndex].querySelector(".piece");
  
      if (targetPiece) {
        this.gameBoard.children[sourceIndex].appendChild(targetPiece);
      } else {
        this.gameBoard.children[sourceIndex].innerHTML = "";
      }
  
      this.gameBoard.children[targetIndex].appendChild(sourcePiece);
    }
  
    teleportEffect(sourceIndex, targetIndex) {
      const sourcePiece = this.gameBoard.children[sourceIndex].querySelector(".piece");
      this.gameBoard.children[sourceIndex].innerHTML = "";
  
      const emptySquares = [];
      for (let i = 0; i < this.gameBoard.children.length; i++) {
        if (!this.gameBoard.children[i].querySelector(".piece")) {
          emptySquares.push(i);
        }
      }
  
      const randomEmptyIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
      this.gameBoard.children[randomEmptyIndex].appendChild(sourcePiece);
    }
  
    freezeEffect(sourceIndex, targetIndex) {
      const sourcePiece = this.gameBoard.children[sourceIndex].querySelector(".piece");
      this.gameBoard.children[sourceIndex].innerHTML = "";
      this.gameBoard.children[targetIndex].appendChild(sourcePiece);
  
      // Add a "frozen" data attribute to the piece
      sourcePiece.dataset.frozen = "true";
    }
  
    reverseEffect(sourceIndex, targetIndex) {
      const sourcePiece = this.gameBoard.children[sourceIndex].querySelector(".piece");
      const targetPiece = this.gameBoard.children[targetIndex].querySelector(".piece");
  
      if (targetPiece) {
        // Swap the teams for both pieces
        const sourceTeam = sourcePiece.dataset.team;
        const targetTeam = targetPiece.dataset.team;
        sourcePiece.dataset.team = targetTeam;
        targetPiece.dataset.team = sourceTeam;
  
        // Update the piece colors to match their new teams
        sourcePiece.style.backgroundColor = this.getPieceColor(targetTeam);
        targetPiece.style.backgroundColor = this.getPieceColor(sourceTeam);
      }
    }
  
    detectWinCondition() {
      // Implement the win condition logic, e.g., capturing the opponent's Emoji Wizard
      const emojiWizardPlayer1 = this.initialPiecePositions.find(
        (position) => position.type === "emoji_wizard" && position.player === 1
      );
      const emojiWizardPlayer2 = this.initialPiecePositions.find(
        (position) => position.type === "emoji_wizard" && position.player === 2
      );
    
      const emojiWizardSquarePlayer1 = this.gameBoard.children[emojiWizardPlayer1.index];
      const emojiWizardSquarePlayer2 = this.gameBoard.children[emojiWizardPlayer2.index];
    
      if (!emojiWizardSquarePlayer1.querySelector(".piece")) {
        return 2;
      } else if (!emojiWizardSquarePlayer2.querySelector(".piece")) {
        return 1;
      } else {
        return null;
      }
    }
    
    applyMemeSquareEffect(targetIndex) {
      const targetSquare = this.gameBoard.children[targetIndex];
  
      if (targetSquare.classList.contains("swap")) {
        this.swapEffect(sourceIndex, targetIndex);
      } else if (targetSquare.classList.contains("teleport")) {
        this.teleportEffect(sourceIndex, targetIndex);
      } else if (targetSquare.classList.contains("freeze")) {
        this.freezeEffect(sourceIndex, targetIndex);
      } else if (targetSquare.classList.contains("reverse")) {
        this.reverseEffect(sourceIndex, targetIndex);
      }
      if (memeSquare) {
        switch (memeSquare.effect) {
          case 'swap':
            this.swapEffect(targetIndex);
            break;
          case 'teleport':
            this.teleportEffect(targetIndex);
            break;
          case 'freeze':
            this.freezeEffect(targetIndex);
            break;
          case 'reverse':
            this.reverseEffect(targetIndex);
            break;
        }
      }
    
    }
  
    movePiece(sourceIndex, targetIndex) {
      // ...
      if (this.selectedPiece) {
        square.appendChild(this.selectedPiece);
        this.selectedPiece.classList.remove("selected");
        this.selectedPiece = null;
      }
    
      this.applyMemeSquareEffect(targetIndex);
      this.toggleTurn();
      this.decrementFrozenCount();
      this.decrementEffectCount();

      const targetSquare = this.gameBoard.children[targetIndex];

  if (targetSquare.classList.contains("swap")) {
    this.swapEffect(sourceIndex, targetIndex);
  } else if (targetSquare.classList.contains("teleport")) {
    this.teleportEffect(sourceIndex, targetIndex);
  } else if (targetSquare.classList.contains("freeze")) {
    this.freezeEffect(sourceIndex, targetIndex);
  } else if (targetSquare.classList.contains("reverse")) {
    this.reverseEffect(sourceIndex, targetIndex);
  } else {
    const sourcePiece = this.gameBoard.children[sourceIndex].querySelector(".piece");
    this.gameBoard.children[sourceIndex].innerHTML = "";
    this.gameBoard.children[targetIndex].appendChild(sourcePiece);
  }
    }
  
    toggleTurn() {
      this.turn = this.turn === "teamA" ? "teamB" : "teamA";
    }
  
    decrementFrozenCount() {
      for (const [piece, count] of this.frozenPieces.entries()) {
        if (count <= 1) {
          this.frozenPieces.delete(piece);
          piece.removeAttribute("data-frozen");
        } else {
          this.frozenPieces.set(piece, count - 1);
        }
      }
    }
  
    decrementEffectCount() {
      for (const [index, count] of this.effectSquares.entries()) {
        if (count <= 1) {
          this.effectSquares.delete(index);
          this.gameBoard.children[index].className = "square";
        } else {
          this.effectSquares.set(index, count - 1);
        }
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const memeMasters = new MemeMasters();
  
    document.getElementById("game-board").addEventListener("click", (event) => {
      // ...
   
    });
  
    let sourceIndex = null;
    let targetIndex = null;
  
    document.getElementById("game-board").addEventListener("click", (event) => {
      const square = event.target.closest(".square");
      if (!square) {
        return;
      }
  
      const piece = square.querySelector(".piece");
      const squareIndex = Array.from(memeMasters.gameBoard.children).indexOf(square);
  
      if (piece && !sourceIndex) {
        if (piece.dataset.team === memeMasters.turn) {
          sourceIndex = squareIndex;
          square.classList.add("selected");
        }
      } else if (sourceIndex !== null) {
        targetIndex = squareIndex;
  
        if (memeMasters.isValidMove(sourceIndex, targetIndex)) {
          memeMasters.movePiece(sourceIndex, targetIndex);
        }
  
        memeMasters.gameBoard.children[sourceIndex].classList.remove("selected");
        sourceIndex = null;
        targetIndex = null;
      }
    });
  });