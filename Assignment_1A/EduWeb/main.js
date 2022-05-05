// signup form
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
var totalValid = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  var JSONObj = { Name: usernameValue, Email: emailValue };
  console.log(JSONObj);
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else if (usernameValue[0] >= "0" && usernameValue[0] <= "9") {
    setErrorFor(username, "First character of the username cannot be a digit");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Minimum length of password must be 6");
  } else if (passwordValue.length > 15) {
    setErrorFor(password, "Maximum length of password must be 15");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Confirm Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  totalValid++;
  if (totalValid === 4) {
    // location.href = "./index.html";
    // console.log(JSONObj);
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Search Bar
// const searchButton = document.getElementById("search-button");
// const searchInput = document.getElementById("search-input");
// searchButton.addEventListener("click", () => {
//   const inputValue = searchInput.value;
//   alert(inputValue);
// });
