// Define the cats array
const cats = ["Milo", "Otis", "Garfield"];

// Destructively append a cat
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Destructively prepend a cat
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Destructively remove the last cat
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Destructively remove the first cat
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Append a cat without modifying the original array
function appendCat(name) {
    return [...cats, name];
}

// Prepend a cat without modifying the original array
function prependCat(name) {
    return [name, ...cats];
}

// Remove the last cat without modifying the original array
function removeLastCat() {
    return cats.slice(0, -1);
}

// Remove the first cat without modifying the original array
function removeFirstCat() {
    return cats.slice(1);
}

// Export the functions (if using Node.js)
module.exports = {
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};
