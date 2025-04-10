const myObj = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in object) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

//not used for map but can be used for arrays
