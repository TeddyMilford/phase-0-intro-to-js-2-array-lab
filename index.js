// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = function (name) {
  cats.push(name);
};

const destructivelyPrependCat = function (name) {
  cats.unshift(name);
};

const destructivelyRemoveLastCat = function (name) {
  cats.pop();
};
const destructivelyRemoveFirstCat = function (name) {
  cats.shift();
};

const appendCat = function (name) {
  let newCats = [...cats, name];
  return newCats;
};
const prependCat = function (name) {
  let newCats = [name, ...cats];
  return newCats;
};

const removeLastCat = function () {
  let newCats = cats.slice(0, cats.length - 1);
  return newCats;
};
const removeFirstCat = function () {
  let newCats = cats.slice(1);
  return newCats;
};
