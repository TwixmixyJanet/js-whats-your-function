//what's your function
var startMyDay = function () {
  return "Time to walk the dog!";
};
console.log(startMyDay());

//function with 1 parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie("thin mints"));

//function with 2 parameters
var introduce = function (name, occupation) {
  return `Hello, my name is ${name} and for work I am a ${occupation}. Much gusto!`;
};
console.log(introduce("Janet", "Project Manager"));
console.log(introduce("Janet", "Front End Developer"));

//Function to capture input
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today? ")
  );
  if (numGlasses >= 8) {
    console.log(
      "Good job. I hope you included salt and other feel good minerals!"
    );
  } else if (numGlasses < 8) {
    console.log("You must look like a raisin! Go drink some water before bed.");
  }
};

hydrationFeedback();
