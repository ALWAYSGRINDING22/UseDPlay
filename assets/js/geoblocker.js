const validCodes = ["Yqcne2", "Omv46U", "L3v2I0", "fxFl6s", "ZlO3Gy", "t760kv", "006I09", "7cu2ZG", "U9P0Nl", "mjzRK3", "XXXXXX"];

if (window.location.pathname.endsWith("blocked.html") && localStorage.getItem("accessGranted") !== "true") {
  showAuthDiv();
} else if (window.location.pathname.endsWith("blocked") && localStorage.getItem("accessGranted") === "true") {
  window.location.href = "/";
} else if (!window.location.pathname.endsWith("blocked") && localStorage.getItem("accessGranted") !== "true") {
  window.location.href = "blocked";
}

function showAuthDiv() {
  const authDiv = document.getElementById("auth");
  if (authDiv) {
    authDiv.style.display = "block";
  }
}

function checkInviteCode() {
  const inputCode = document.getElementById("invite-code").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (validCodes.includes(inputCode)) {
    localStorage.setItem("accessGranted", "true");
    window.location.href = "/";
  } else {
    errorMessage.style.display = "block";
  }
}

const inputField = document.getElementById("invite-code");
const tooltip = document.getElementById("tooltip");

inputField.addEventListener("mouseover", () => {
  tooltip.style.display = "block";
});

inputField.addEventListener("mouseout", () => {
  tooltip.style.display = "none";
});
