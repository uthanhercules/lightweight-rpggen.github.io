const { dice_roll } = require('../utilities');

const atributes_values = (min_atribute_value) => {
    const atributes = [];

    for (let i = 0; i < 6; i++) {
        atributes.push(dice_roll(min_atribute_value, 18));
    }

    atributes.sort((a, b) => {
        return b - a;
    });

    return atributes;
};

module.exports = { atributes_values };
