const profile = {
    firstName: "Lei",
    familyName: "HUANG",
    age: 24,
    major: "philosophy",
    hobby: "game",
    job: "student",
};

const keys = Object.keys(profile);

for (let key of keys) {
  const value = profile[key];
  const text = "my " + key + " is " + value + " .";
  console.log(text);
}