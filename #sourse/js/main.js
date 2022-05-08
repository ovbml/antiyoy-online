// @prepros-prepend "scroll animation.js"

// to colorize numbers
Array.prototype.getRandomELement = function() {
    return this[Math.floor(Math.random() * this.length)];
}
Array.prototype.removeElement = function(element) {
    return this.filter(el => el != element);
}

let classList = ['_yellow', '_red', '_blue', '_green', '_purple', '_orange', '_pink'];

for ( let number of document.getElementsByClassName('main__number') ) {
    let className = classList.getRandomELement();
    classList = classList.removeElement(className);

    number.classList.add(className);
}