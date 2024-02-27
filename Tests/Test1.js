let userArray = [
  { Name: "Shyam", DOB: "10/13/1992" },
  { Name: "Shyam", DOB: "11/29/1995" },
  { Name: "Shyam", DOB: "04/02/1999" },
];

const d = new Date();

//Quertions - Use the abive object and modified it and create a new property Age for each user element

//Hint:- Use Map method

function calculateAge(date) {
  var formattedDate = date.split("/");
  var birthdateTimeStamp = new Date(
    formattedDate[2],
    formattedDate[1],
    formattedDate[0]
  );
  var currentDate = new Date().getTime();
  var difference = currentDate - birthdateTimeStamp;
  var currentAge = Math.floor(difference / 31557600000);
  // dividing by 1000*60*60*24*365.25
  return currentAge;
}

let newarry = userArray.map((e) => {
  debugger;
  var currentDate = new Date().getTime();
  var birth = new Date(e.DOB);
  var check = new Date();

  var milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;

  var ageInDays = (check - birth) / milliDay;

  var ageInYears = Math.floor(ageInDays / 365);
  let age = calculateAge(e.DOB.replace("-", "/"));
  let newArray = [{ Name: e.Name, DOB: e.DOB, Age: age }];
  return newArray;
});

console.log(newarry);
