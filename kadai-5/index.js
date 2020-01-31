const profile = {
    firstName: "Lei",
    familyName: "HUANG",
    age: 24,
    major: "philosophy",
    hobby: "game",
    job: "student",
};

const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i + 1){
    const key = keys[i];
    const value = profile[key];
    const text = "my " + key + " is " + value + " .";
    console.log(text);
}