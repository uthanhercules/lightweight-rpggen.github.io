function dice_roll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

function capitalize(name) {
    function capitalize_word(word) {
        const word_capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        return word_capitalized;
    }

    const name_capitalized = name.split(' ').map(capitalize_word).join(' ');
    return name_capitalized;
}

const random_index = (highest_index) => {
    return Math.floor(Math.random() * highest_index);
};
