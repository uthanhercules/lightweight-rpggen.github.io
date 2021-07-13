const { dice_roll } = require('../utilities');

const atributes_values = (roll_type, min_atribute_value) => {
    if (roll_type === 'roll') {
        const atributes = [];

        for (let i = 0; i < 6; i++) {
            atributes.push(dice_roll(min_atribute_value, 18));
        }

        atributes.sort((a, b) => {
            return b - a;
        });

        return atributes;
    } else {
        return [15, 14, 13, 12, 10, 8];
    }
};

module.exports = { atributes_values };
