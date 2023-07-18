// 💻 Create three arrays of strings, one called "randomBodyParts", one called "randomAdjectives", and one called "randomWords".
// Put at least 10 strings in each

let randomBodyParts = [
    "freckles",
"teeth",
"feet",
"eyes",
"tounge",
"mouth",
"hands",
"ears",
"nose",
"back"];
let randomeAdjectives = [
    "blue",
"greese",
"pig",
"human"];
let randomWords = [
    "phone",
"chair",
"doorhandle",
"grimace shake",
"wet toilet paper",
"raw steak",
"wonder bread",];

/*
💻 Write the code to generate the insult here
*/let bodyPartIndex = Math.floor(Math.random()*randomBadyParts.length)
let adjectiveIndex =Math.floor(Math.random()*randomAdjectives.length)
let wordIndex =Math.floor(Math.random()*randomWords.length)





let bodyParts = randomBadyParts[bodyPartIndex]
let adjective = randomeAdjectives[adjectiveIndex]
let word = randomWords[wordIndex]

let insult = "Your " + bodyParts + " is like a " + adjective + " " + word + "!"



// Change "Unwritten Insult" to your insult variable
document.getElementById("insult-spot").innerText = insultText = insult


