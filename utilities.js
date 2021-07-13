function dice_roll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

function capitalize(name) {
    function capitalize_word(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const name_capitalized = name.split(' ').map(capitalize_word).join(' ');

    return name_capitalized;
}

module.exports = { dice_roll, capitalize };
