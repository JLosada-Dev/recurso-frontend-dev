// ===== CONFIGURACIÓN DEL JUEGO =====
const gameConfig = {
  emojis: ["🎮", "🎯", "🎲", "🎪", "🎨", "🎭", "🎸", "🎺"],
  totalPairs: 8,
  flipDelay: 1000,
};

// ===== ESTADO DEL JUEGO =====
let gameState = {
  cards: [],
  flippedCards: [],
  matchedPairs: 0,
  moves: 0,
  timeElapsed: 0,
  timerInterval: null,
  isProcessing: false,
};

// ===== ELEMENTOS DOM =====
const elements = {
  gameBoard: document.getElementById("gameBoard"),
  movesDisplay: document.getElementById("moves"),
  timerDisplay: document.getElementById("timer"),
  pairsDisplay: document.getElementById("pairs"),
  resetBtn: document.getElementById("resetBtn"),
  victoryModal: document.getElementById("victoryModal"),
  finalMoves: document.getElementById("finalMoves"),
  finalTime: document.getElementById("finalTime"),
  playAgainBtn: document.getElementById("playAgainBtn"),
};

// ===== FUNCIONES PRINCIPALES =====

/**
 * Inicializa el juego
 */
function initGame() {
  resetGameState();
  createCards();
  renderCards();
  attachEventListeners();
}

/**
 * Resetea el estado del juego
 */
function resetGameState() {
  gameState = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    timeElapsed: 0,
    timerInterval: null,
    isProcessing: false,
  };
  updateDisplay();
  stopTimer();
}

/**
 * Crea el array de cartas con los emojis duplicados y mezclados
 */
function createCards() {
  // Duplicar los emojis para crear pares
  const duplicatedEmojis = [...gameConfig.emojis, ...gameConfig.emojis];

  // Mezclar el array (Algoritmo de Fisher-Yates)
  gameState.cards = shuffleArray(duplicatedEmojis);
}

/**
 * Mezcla un array usando el algoritmo de Fisher-Yates
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Renderiza las cartas en el tablero
 */
function renderCards() {
  elements.gameBoard.innerHTML = "";

  gameState.cards.forEach((emoji, index) => {
    const card = createCardElement(emoji, index);
    elements.gameBoard.appendChild(card);
  });
}

/**
 * Crea un elemento de carta
 */
function createCardElement(emoji, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.index = index;
  card.dataset.emoji = emoji;

  card.innerHTML = `
                <div class="card__inner">
                    <div class="card__face card__face--front">?</div>
                    <div class="card__face card__face--back">${emoji}</div>
                </div>
            `;

  return card;
}

/**
 * Adjunta event listeners a los elementos
 */
function attachEventListeners() {
  elements.gameBoard.addEventListener("click", handleCardClick);
  elements.resetBtn.addEventListener("click", initGame);
  elements.playAgainBtn.addEventListener("click", () => {
    hideModal();
    initGame();
  });
}

/**
 * Maneja el click en una carta
 */
function handleCardClick(event) {
  const card = event.target.closest(".card");

  // Validaciones
  if (!card || gameState.isProcessing) return;
  if (card.classList.contains("flipped") || card.classList.contains("matched"))
    return;
  if (gameState.flippedCards.length >= 2) return;

  // Iniciar el timer en el primer click
  if (gameState.moves === 0 && gameState.timeElapsed === 0) {
    startTimer();
  }

  // Voltear la carta
  flipCard(card);

  // Agregar la carta al array de cartas volteadas
  gameState.flippedCards.push(card);

  // Verificar si hay dos cartas volteadas
  if (gameState.flippedCards.length === 2) {
    gameState.moves++;
    updateDisplay();
    checkForMatch();
  }
}

/**
 * Voltea una carta
 */
function flipCard(card) {
  card.classList.add("flipped");
}

/**
 * Verifica si las dos cartas volteadas coinciden
 */
function checkForMatch() {
  gameState.isProcessing = true;
  const [card1, card2] = gameState.flippedCards;
  const emoji1 = card1.dataset.emoji;
  const emoji2 = card2.dataset.emoji;

  if (emoji1 === emoji2) {
    // ¡Coinciden!
    handleMatch(card1, card2);
  } else {
    // No coinciden
    handleMismatch(card1, card2);
  }
}

/**
 * Maneja cuando las cartas coinciden
 */
function handleMatch(card1, card2) {
  setTimeout(() => {
    card1.classList.add("matched");
    card2.classList.add("matched");
    gameState.matchedPairs++;
    gameState.flippedCards = [];
    gameState.isProcessing = false;
    updateDisplay();

    // Verificar si el juego ha terminado
    if (gameState.matchedPairs === gameConfig.totalPairs) {
      endGame();
    }
  }, 500);
}

/**
 * Maneja cuando las cartas no coinciden
 */
function handleMismatch(card1, card2) {
  setTimeout(() => {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
    gameState.flippedCards = [];
    gameState.isProcessing = false;
  }, gameConfig.flipDelay);
}

/**
 * Inicia el cronómetro
 */
function startTimer() {
  gameState.timerInterval = setInterval(() => {
    gameState.timeElapsed++;
    updateDisplay();
  }, 1000);
}

/**
 * Detiene el cronómetro
 */
function stopTimer() {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }
}

/**
 * Formatea el tiempo en formato MM:SS
 */
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

/**
 * Actualiza la visualización de las estadísticas
 */
function updateDisplay() {
  elements.movesDisplay.textContent = gameState.moves;
  elements.timerDisplay.textContent = formatTime(gameState.timeElapsed);
  elements.pairsDisplay.textContent = `${gameState.matchedPairs}/${gameConfig.totalPairs}`;
}

/**
 * Finaliza el juego
 */
function endGame() {
  stopTimer();
  setTimeout(() => {
    showModal();
  }, 500);
}

/**
 * Muestra el modal de victoria
 */
function showModal() {
  elements.finalMoves.textContent = gameState.moves;
  elements.finalTime.textContent = formatTime(gameState.timeElapsed);
  elements.victoryModal.classList.add("active");
}

/**
 * Oculta el modal de victoria
 */
function hideModal() {
  elements.victoryModal.classList.remove("active");
}

// ===== INICIALIZACIÓN =====
// Iniciar el juego cuando se carga la página
document.addEventListener("DOMContentLoaded", initGame);
