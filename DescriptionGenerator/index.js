const { capitalize, random_index } = require('../utilities');

const {
    appearances,
    talents,
    traits,
    signatures,
    flaws,
    alignment_actions,
    alignment_moral,
} = require('./description_list');

const character_details = () => {
    const Appearance = appearances[random_index(appearances.length)];
    const Talent = talents[random_index(talents.length)];
    const Trait = traits[random_index(traits.length)];
    const Signature = signatures[random_index(signatures.length)];
    const Flaw = flaws[random_index(flaws.length)];
    const first_alignment = alignment_actions[random_index(alignment_actions.length)];
    const second_alignment = alignment_moral[random_index(alignment_moral.length)];

    const output = {
        Appearance,
        Talent,
        Trait: capitalize(Trait),
        Signature,
        Flaw,
        Alignment: capitalize(`${first_alignment} ${second_alignment}`),
    };

    return output;
};

module.exports = { character_details };
