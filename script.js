
// task 1- 
const userProfile = {
  name: "Kaussar",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["Gaming", "Reading", "Music"]
};

// task 2- arithmetic calculations
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function calculateAgeInMonths(birthYear) {
  return calculateAge(birthYear) * 12;
}

console.log("Initial User Profile:", userProfile);
console.log("Calculated Age:", calculateAge(userProfile.birthYear));
console.log("Age in Months:", calculateAgeInMonths(userProfile.birthYear));
console.log("Total Initial Hobbies:", userProfile.hobbies.length);

function renderProfile() {
  const age = calculateAge(userProfile.birthYear);
  const months = calculateAgeInMonths(userProfile.birthYear);

  document.getElementById("out-name").textContent = userProfile.name;
  document.getElementById("out-year").textContent = userProfile.birthYear;
  document.getElementById("out-dev").textContent = userProfile.isDeveloper ? "Yes" : "No";
  document.getElementById("out-age").textContent = age;
  document.getElementById("out-months").textContent = months;
}
//part 2

const profileForm = document.getElementById("profile-form");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birth-year");

// task 4
profileForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const newName = usernameInput.value.trim();
  const newBirthYear = parseInt(birthYearInput.value, 10);

  if (newName && !isNaN(newBirthYear)) {
    userProfile.name = newName;
    userProfile.birthYear = newBirthYear;

    // Refresh DOM display and log changes
    renderProfile();
    console.log("Updated userProfile:", userProfile);

    usernameInput.value = "";
    birthYearInput.value = "";
  }
});

// part 3

const itemsList = document.getElementById("items-list");
const itemInput = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const listCounter = document.getElementById("list-counter");

function updateCounter() {
  listCounter.textContent = `Total Items: ${userProfile.hobbies.length}`;
}

// Render initial items from userProfile.hobbies
function renderInitialList() {
  itemsList.innerHTML = "";
  userProfile.hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    itemsList.appendChild(li);
  });
  updateCounter();
}

// task 5 -Add 
addBtn.addEventListener("click", function () {
  const text = itemInput.value.trim();
  if (text !== "") {

    const newLi = document.createElement("li");
    newLi.textContent = text;

    itemsList.appendChild(newLi);

    userProfile.hobbies.push(text);
    updateCounter();

    console.log("Added:", text, "| Current hobbies:", userProfile.hobbies);
    itemInput.value = "";
  }
});

//task 5- remove last 
removeBtn.addEventListener("click", function () {
  if (itemsList.lastElementChild) {

    itemsList.removeChild(itemsList.lastElementChild);

    userProfile.hobbies.pop();
    updateCounter();

    console.log("Removed last item | Current hobbies:", userProfile.hobbies);
  }
});

renderProfile();
renderInitialList();