- `getFirstCard`: Soll die erste Karte vom Stapel nehmen
    - Dabei soll nicht `shift` oder `array[index]` verwendet werden
```javascript
const deck = [5, 9, 7, 1, 8];
getFirstCard(deck); // => 5
```
- `getSecondCard`: Soll die zweite Karte vom Stapel nehmen 
```javascript
const deck = [3, 2, 10, 6, 7];
getSecondCard(deck); // => 2
```
- `swapTopTwoCards`: Die ersten 2 Karten sollen Plätze tauschen
```javascript
const deck = [10, 7, 3, 8, 5];
swapTopTwoCards(deck); // => [7, 10, 3, 8, 5]
```
- `discardTopCard`: Der Kartenstapel soll in zwei geteilt werden, Gebe ein `array` zurück, welches an erster Position die oberste Karte enthält und an zweiter den restlichen Stapel
```javascript
const deck = [2, 5, 4, 9, 3];
discardTopCard(deck); // => [2, [5, 4, 9, 3]]
```
- `insertFaceCards`: Die Karten `Jack`, `Queen`, `King` sollen die 2.-4. Stelle im Kartendeck einnehmen
```javascript
const deck = [5, 4, 7, 10];
insertFaceCards(deck); // => [5, 'jack', 'queen', 'king', 4, 7, 10]
```