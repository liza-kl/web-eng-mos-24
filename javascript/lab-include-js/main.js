const button = document.getElementById('myButton');
button.addEventListener('click', function () {
  console.log(this); // Output: [DOM element that triggered the event]
});