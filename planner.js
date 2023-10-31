const COHORT = "2309-FTB-ET-WEB-FT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const addEventForm = document.querySelector("#addEvent");
const eventsList = document.querySelector("#events");

// Add event listener for form submission
addEventForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the form input values
  const name = addEventForm.querySelector('input[name="name"]').value;
  const date = addEventForm.querySelector('input[name="date"]').value;
  const time = addEventForm.querySelector('input[name="time"]').value;
  const location = addEventForm.querySelector('input[name="location"]').value;
  const description = addEventForm.querySelector(
    'input[name="description"]'
  ).value;

  const newEvent = {
    name,
    date,
    time,
    location,
    description,
  };
  addEvent(event);

  addEventForm.reset();
});

function addEvent(event) {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
<strong>${event.name}</strong><br>
Date: ${event.date}<br>
Time: ${event.time}<br>
Location: ${event.location}<br>
Description: ${event.description}`;

  eventsList.appendChild(listItem);
}
