/*
function howManyLightsabersDoYouOwn(name) {
    if (name === "Zach") {
      return 18;
    } else {
      return 0;
    }
  }*/

////////////////////////////////////////////

/*
function take(arr, n) {
  return arr.slice(0, n);
}
*/

////////////////////////////////////////////

/*
function longest(s1, s2) {
  let sort1 = [...new Set(s1.split("").sort())];
  let sort2 = [...new Set(s2.split("").sort())];
  let arr = [];
  for (let i = 0; i < sort1.length; i++) {
    arr.push(sort1[i]);
  }
  for (let i = 0; i < sort2.length; i++) {
    arr.push(sort2[i]);
  }
  let sort3 = [...new Set(arr)];
  console.log(sort3);
  return sort3.sort().join("");
}
*/
////////////////////////////////////////////
/*
function solve(s) {
  console.log(s);
  let toUpper = 0;
  let toLower = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(s.charCodeAt(i));
    s.charCodeAt(i) < 91 ? toUpper++ : toLower++;
  }
  if (toLower > toUpper) {
    return s.toLowerCase();
  } else if (toLower == toUpper) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}
*/
////////////////////////////////////////////
