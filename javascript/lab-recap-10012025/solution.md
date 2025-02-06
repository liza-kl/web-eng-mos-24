## 1. Funktionen als (Variablen)-Werte
- **Aufgabe**: Definiere eine Funktion `multiply`, die zwei Zahlen multipliziert und das Ergebnis zurückgibt. Weise diese Funktion einer Variablen zu und rufe sie auf.

```javascript
const multiply = function(a, b) {
    return a * b;
};
```
---
## 2. Arrow Functions
- Schreibe eine Arrow Functio `isEven`, die eine Zahl akzeptiert und true zurückgibt, wenn die Zahl gerade ist, andernfalls false.

```javascript
const isEven = (num) => num % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(5)); // false
```
---
## 3. Higher Order Functions
-  Erstelle eine Higher Order Function `createMultiplier`, die einen Faktor akzeptiert und eine Funktion zurückgibt, die einen Wert mit diesem Faktor multipliziert.

```javascript
const createMultiplier = (factor) => {
    return (value) => value * factor;
};
const double = createMultiplier(2);
console.log(double(5)); // 10
```
---
## 4. Closures
- Implementiere eine Funktion `makeCounter`, die einen Zähler zurückgibt. Der Zähler sollte bei jedem Aufruf um 1 erhöht werden.

```javascript
const makeCounter = () => {
    let count = 0;
    return () => {
        count += 1;
        return count;
    };
};

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
---
## 5. `this` in JavaScript
-  Erstelle ein Objekt car mit einer Methode getModel, die den Modellnamen des Autos zurückgibt. Verwende this, um auf die Eigenschaft model zuzugreifen

- Hier ist es wichtig, die „normale” `function` Deklaration zu verwenden, da sich diese an den umliegenden Kontext
bindet und nicht wie bei einer Arrow Function, die sich an den Kontext bindet in der sie definiert wurde 
```javascript
const car = {
    model: 'Toyota',
    getModel: function() {
        return this.model;
    }
};
console.log(car.getModel()); // Toyota
```
---
## 6. Arrays und Objekte
- Schreibe eine Funktion `getUniqueValues`, die ein Array mit Zahlen akzeptiert und ein neues Array mit nur einzigartigen Werten zurückgibt. Tipp: Lese dich dafür in den `Set` Datentyp von JavaScript ein.

```javascript
const getUniqueValues = (arr) => {
    return Array.from(new Set(arr));
};

console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
---
## 7. Promises
- Schreibe eine Funktion `fetchData`, die eine URL entgegennimmt und ein Promise zurückgibt, das die Daten von dieser URL abruft und in JSON umwandelt. Verwende dabei erstmal kein `async/await` 

```javascript
const fetchData = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
};

// Beispielaufruf
fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));
```
---
## 8. `async/await`

- Schreibe eine asynchrone Funktion `getUser`, die die Daten eines Benutzers von einer API abruft (z.B. https://jsonplaceholder.typicode.com/users/1) und den Namen des Benutzers in der Konsole ausgibt

```javascript
const getUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        console.log(`User Name: ${user.name}`);
    } catch (error) {
        console.error('Error fetching user:', error);
    }
};
getUser();
```
---
## 9. Callbacks
- Implementiere eine einfache Funktion, die eine Callback-Funktion akzeptiert und diese aufruft, um eine Nachricht in der Konsole anzuzeigen.

1. **Callback-Funktion**:
   - Implementiere eine Funktion `showMessage`, die eine Nachricht als Parameter akzeptiert und diese in der Konsole ausgibt.

2. **Hauptfunktion**:
   - Implementiere eine Funktion `greet`, die eine Callback-Funktion als Parameter akzeptiert.
   - Diese Funktion soll die Nachricht "Hallo, Welt!" an die Callback-Funktion übergeben und sie aufrufen.

```javascript
// Callback-Funktion
const showMessage = (message) => {
    console.log(message);
};

// Hauptfunktion
const greet = (callback) => {
    const message = "Hallo, Welt!";
    callback(message); // Callback-Funktion aufrufen
};

// Beispielaufruf
greet(showMessage); // Gibt "Hallo, Welt!" in der Konsole aus
```
---
## 10. Destructuring
- Du hast das folgende Objekt, das Informationen über eine Person enthält:

```javascript
const person = {
  name: 'Max',
  age: 28,
  hobbies: ['Sport', 'Lesen', 'Reisen'],
  address: {
    street: 'Musterstraße 1',
    city: 'Musterstadt',
  },
};
```

1. Destructure die Eigenschaften `name` und `age` aus dem `person`-Objekt in separate Variablen.
2. Destructure die `hobbies`-Eigenschaft und speichere die Hobbys in separaten Variablen (z.B. `hobby1`, `hobby2`, `hobby3`).
3. Destructure die`street` und `city` aus der `address` Eigenschaft in separate Variablen.

```javascript
const {name,age,hobbies, address} = person;
// auch möglich: const {name,age,hobbies, address: {street, city} } = person;
const [hobby1,hobby2,hobby3] = hobbies;
const {street, city} = address
```

--`