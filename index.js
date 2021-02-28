function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(greeting) {
    console.log(greeting.toUpperCase());
}

function logWhisper(greeting) {
    console.log(greeting.toLowerCase());
}

function sayHiToGrandma(string) {
    if (string===string.toUpperCase()) {
        //console.log("1st")
        return "YES INDEED!";
}   else if (string===string.toLowerCase()) {
        //console.log("2nd")
        return "I can\'t hear you!";
}   else if (string==="I love you, Grandma.") {
        //console.log("3rd")
        return "I love you, too.";
    }
    //console.log("SOS")
}



// switch (string) {
//     case ""
// }