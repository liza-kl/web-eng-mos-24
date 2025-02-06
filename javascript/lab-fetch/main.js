const elem = document.getElementById("data");
const btn = document.getElementById("fetchButton");

function fetchStarWarsCharacter(id) {
  const url = `https://api.chucknorris.io/jokes/random`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => { 
     
      elem.innerHTML = `<p>A joke ${data.value}</p>`;
    })
    .catch((error) => {
      console.error("Error:", error);
      elem.innerHTML = `<p>An error occurred: ${error.message}</p>`;
    });
}

btn.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * 10) + 1; // Random ID between 1 and 10
  fetchStarWarsCharacter(randomId);
});
