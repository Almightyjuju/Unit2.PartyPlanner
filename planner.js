const addEventForm = document.querySelector("#addEvent");
const eventsList = document.querySelector("#events");

// Add event listener for form submission
addEventForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the form input values
  const name = addEventForm.name.value;
  const date = addEventForm.date.value;
  const time = addEventForm.time.value;
  const location = addEventForm.location.value;
  const description = addEventForm.description.value;

  const event = {
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
