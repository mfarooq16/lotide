//
const assertEqual = require('../assertEqual');
const tail = require('../tail');

//
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


const names = tail(["anam", "maham", "adil"]);
assertEqual(names.length, 2); // ensure we get back two elements
assertEqual(names[0], "maham");
assertEqual(names[1], "adil");