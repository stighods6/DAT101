"use strict";

import { printOut } from "../../common/script/utils.mjs";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function calculateRectangle() {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);

  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
      document.getElementById('output').innerText = 'Please enter positive numbers.';
      return;
  }

  const perimeter = 2 * (length + width);
  const area = length * width;

  document.getElementById('output').innerText = 
      `Perimeter: ${perimeter} units\nArea: ${area} square units`;
}
printOut("calulater" + calculateRectangle );
//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

document.getElementById('txtTask2Word').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); 

      const word = this.value.trim();
      if (word) {
          task2Words.push(word);
          this.value = '';

          const outputElement = document.getElementById('txtTask2Output');
          outputElement.textContent = `Total words: ${task2Words.length}\nWords: ${task2Words.join(', ')}`;
      }
  }
});
//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById('btnCheck').addEventListener('click', function() {
  const checkboxes = document.querySelectorAll('.task3-checkbox');
  const selectedOptions = [];

  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          selectedOptions.push(checkbox.value);
      }
  });

  const outputElement = document.getElementById('txtTask3Output');

  if (selectedOptions.length > 0) {
      outputElement.textContent = `Selected options: ${selectedOptions.join(', ')}`;
  } else {
      outputElement.textContent = 'No options selected.';
  }
});
//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const divTask4Cars = document.getElementById('divTask4Cars');


for (let i = 0; i < CarTypes.length; i++) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'carType';
    radio.value = CarTypes[i];
    radio.id = `carType${i}`;

    const label = document.createElement('label');
    label.htmlFor = `carType${i}`;
    label.textContent = CarTypes[i];

    divTask4Cars.appendChild(radio);
    divTask4Cars.appendChild(label);
    divTask4Cars.appendChild(document.createElement('br'));
}


document.getElementById('btnShowCar').addEventListener('click', function() {
    const selectedCar = document.querySelector('input[name="carType"]:checked');
    const outputElement = document.getElementById('txtTask4Output');

    if (selectedCar) {
        outputElement.textContent = `Selected car: ${selectedCar.value}`;
    } else {
        outputElement.textContent = 'No car selected.';
    }
});

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById('selectTask5Animals').addEventListener('change', function() {
  const selectedAnimal = this.value;
  const outputElement = document.getElementById('txtTask5Output');

  if (selectedAnimal) {
      outputElement.textContent = `You selected: ${selectedAnimal}`;
  } else {
      outputElement.textContent = 'No animal selected.';
  }
});

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask6Girls = document.getElementById('selectTask6Girls');


GirlsNames.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    selectTask6Girls.appendChild(option);
});


selectTask6Girls.addEventListener('change', function() {
    const selectedName = this.value;
    const outputElement = document.getElementById('txtTask6Output');

    if (selectedName) {
        outputElement.textContent = `You selected: ${selectedName}`;
    } else {
        outputElement.textContent = 'No name selected.';
    }
});
//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectMovieGenre = document.getElementById('selectMovieGenre');


MovieGenre.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    selectMovieGenre.appendChild(option);
});


document.getElementById('cmbAddMovie').addEventListener('click', function() {
    const title = document.getElementById('filmtittel').value.trim();
    const genre = selectMovieGenre.value;
    const director = document.getElementById('filmregissør').value.trim();
    const rating = document.getElementById('filmrate').value.trim();

    if (!title || !genre || !director || !rating) {
        alert('Please fill in all fields before adding a movie.');
        return;
    }

    const tbody = document.getElementById('movieTable').querySelector('tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title}</td>
        <td>${genre}</td>
        <td>${director}</td>
        <td>${rating}</td>
    `;

    tbody.appendChild(row);

    document.getElementById('filmtittel').value = '';
    selectMovieGenre.value = '';
    document.getElementById('filmregissør').value = '';
    document.getElementById('filmrate').value = '';
});
