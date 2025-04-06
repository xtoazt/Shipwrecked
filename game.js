const deck = [
  { type: "Food", value: 2, income: 1 },
  { type: "Shelter", value: 3, income: 2 },
  { type: "Water", value: 1, income: 1 },
  { type: "Hidden" },
  { type: "Friends", value: 5, income: 3 },
];

let currentCard = null;
let bidRound = 5;
let markerPlaced = false;

function startGame() {
  currentCard = deck.shift();
  bidRound = 5;
  markerPlaced = false;
  if (currentCard.type === "Hidden") {
    document.getElementById("cardArea").innerText = "❓ Hidden Resource! Bid blindly!";
    currentCard = deck.shift();
  } else {
    document.getElementById("cardArea").innerText = `🃏 ${currentCard.type} | Value: ${currentCard.value} | Income: ${currentCard.income}`;
  }
  document.getElementById("status").innerText = "Place your bid marker.";
}

function placeMarker(type) {
  if (markerPlaced) return;
  markerPlaced = true;
  document.getElementById("status").innerText = `You placed a '${type}' at position ${bidRound}`;
  if (type === "Stop") {
    document.getElementById("status").innerText += `\nYou won the ${currentCard.type} for ${bidRound} coins!`;
  } else if (bidRound === 0) {
    document.getElementById("status").innerText += `\nNo one stopped the auction. You get it for FREE!`;
  } else {
    bidRound--;
    markerPlaced = false;
    document.getElementById("status").innerText += `\nNext round... Bid at ${bidRound}`;
  }
}
