function getFirstCard(deck) {
    const [first] = deck;
    return first;
}

function getSecondCard(deck) {
    const [_, second] = deck;
    return second;
}

function swapTopTwoCards(deck) {
    const [first, second, ...rest] = deck;
    return [second, first, ...rest];
}

function discardTopCard(deck) {
    const [first, ...rest] = deck; // Denke dran, ...rest gibt ein array zurück
    return [first, rest];
}

const FACE_CARDS = ['jack', 'queen', 'king'];
function insertFaceCards(deck) {
    const [first, ...rest] = deck;
    return [first, ... FACE_CARDS, ...rest];
}