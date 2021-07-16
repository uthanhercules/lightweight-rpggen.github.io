const { name } = require('../NameGenerator');
const { capitalize, dice_roll } = require('../utilities');
const { atributes_values } = require('../AtributeRoller');
const { character_details } = require('../DescriptionGenerator');

const character = (race, gender, job, level, min_atribute_value) => {
    const age = () => {
        switch (race) {
            case 'dwarf':
                return 40 + dice_roll(5, 30);
            case 'elf':
                return 100 + dice_roll(5, 30);
            case 'gnome':
                return 60 + dice_roll(3, 36);
            case 'halfling':
                return 20 + dice_roll(3, 12);
            case 'half elf':
                return 15 + dice_roll(1, 6);
            case 'human':
                return 18 + dice_roll(1, 4);
        }
    };

    const height = () => {
        if (gender === 'male') {
            switch (race) {
                case 'dwarf':
                    return 109 + dice_roll(1, 10);
                case 'elf':
                    return 139 + dice_roll(1, 10);
                case 'gnome':
                    return 96 + dice_roll(1, 6);
                case 'halfling':
                    return 81 + dice_roll(2, 16);
                case 'half elf':
                    return 152 + dice_roll(2, 16);
                case 'human':
                    return 152 + dice_roll(2, 20);
            }
        } else {
            switch (race) {
                case 'dwarf':
                    return 104 + dice_roll(1, 10);
                case 'elf':
                    return 127 + dice_roll(1, 10);
                case 'gnome':
                    return 91 + dice_roll(1, 6);
                case 'halfling':
                    return 76 + dice_roll(2, 16);
                case 'half elf':
                    return 147 + dice_roll(2, 12);
                case 'human':
                    return 149 + dice_roll(2, 20);
            }
        }
    };

    const weight = () => {
        if (gender === 'male') {
            switch (race) {
                case 'dwarf':
                    return 58 + dice_roll(1, 10);
                case 'elf':
                    return 40 + dice_roll(1, 10);
                case 'gnome':
                    return 32 + dice_roll(1, 6);
                case 'halfling':
                    return 23 + dice_roll(2, 16);
                case 'half elf':
                    return 49 + dice_roll(2, 12);
                case 'human':
                    return 63 + dice_roll(2, 20);
            }
        } else {
            switch (race) {
                case 'dwarf':
                    return 47 + dice_roll(4, 40);
                case 'elf':
                    return 31 + dice_roll(3, 30);
                case 'gnome':
                    return 30 + dice_roll(5, 20);
                case 'halfling':
                    return 21 + dice_roll(5, 20);
                case 'half elf':
                    return 38 + dice_roll(3, 36);
                case 'human':
                    return 45 + dice_roll(6, 60);
            }
        }
    };

    let output = {
        Name: name(race, gender),
        Race: capitalize(race),
        Gender: capitalize(gender),
        Class: capitalize(job),
        Hp: null,
        Level: level,
        Attributes: null,
        About: {
            Age: age(),
            Height: height(),
            Weight: weight(),
            ...character_details(),
        },
    };

    const raw_atributes = atributes_values(min_atribute_value);
    let atributes = [];
    let hp = 0;

    if (job === 'men at arms') {
        atributes.push(raw_atributes[0]);
        atributes.push(raw_atributes[2]);
        atributes.push(raw_atributes[1]);
        atributes.push(raw_atributes[5]);
        atributes.push(raw_atributes[4]);
        atributes.push(raw_atributes[3]);

        hp = 10;

        switch (race) {
            case 'dwarf':
                atributes[2] += 1;
                atributes[5] -= 1;
                break;
            case 'elf':
                atributes[1] += 1;
                atributes[2] -= 1;
                break;
            case 'gnome':
                atributes[3] += 1;
                atributes[4] -= 1;
                break;
            case 'halfling':
                atributes[1] += 1;
                atributes[0] -= 1;
                break;
        }

        switch (atributes[2]) {
            case 15:
                hp += 1;
                break;
            case 16:
                hp += 2;
                break;
            case 17:
                hp += 3;
                break;
            case 18:
                hp += 4;
        }

        if (level > 1) {
            for (let i = 0; i < level - 1; i++) {
                if (atributes[2] === 18) {
                    const bonus_hp = dice_roll(2, 10) + 4;
                    hp += bonus_hp;
                } else if (atributes[2] === 17) {
                    const bonus_hp = dice_roll(2, 10) + 3;
                    hp += bonus_hp;
                } else if (atributes[2] === 16) {
                    const bonus_hp = dice_roll(1, 10) + 2;
                    hp += bonus_hp;
                } else if (atributes[2] === 15) {
                    const bonus_hp = dice_roll(1, 10) + 1;
                    hp += bonus_hp;
                } else if (atributes[2] >= 7) {
                    const bonus_hp = dice_roll(1, 10);
                    hp += bonus_hp;
                } else if (atributes[2] >= 4) {
                    const bonus_hp = dice_roll(1, 10) - 1;

                    if (bonus_hp > 0) {
                        hp += bonus_hp;
                    }
                } else {
                    const bonus_hp = dice_roll(1, 10) - 2;

                    if (bonus_hp > 0) {
                        hp += bonus_hp;
                    }
                }
            }
        }

        if (level > 9) {
            for (let i = 0; i < level - 9; i++) {
                hp += 3;
            }
        }
    }
    if (job === 'priest') {
        atributes.push(raw_atributes[3]);
        atributes.push(raw_atributes[5]);
        atributes.push(raw_atributes[4]);
        atributes.push(raw_atributes[1]);
        atributes.push(raw_atributes[0]);
        atributes.push(raw_atributes[2]);

        hp = 8;

        switch (race) {
            case 'dwarf':
                atributes[2] += 1;
                atributes[5] -= 1;
                break;
            case 'elf':
                atributes[1] += 1;
                atributes[2] -= 1;
                break;
            case 'gnome':
                atributes[3] += 1;
                atributes[4] -= 1;
                break;
            case 'halfling':
                atributes[1] += 1;
                atributes[0] -= 1;
                break;
        }

        if (atributes[2] === 15) {
            hp += 1;
        } else if (atributes[2] >= 16) {
            hp += 2;
        }

        if (level > 1) {
            for (let i = 0; i < level - 1; i++) {
                if (atributes[2] >= 17) {
                    const bonus_hp = dice_roll(2, 8) + 2;
                    hp += bonus_hp;
                } else if (atributes[2] === 16) {
                    const bonus_hp = dice_roll(1, 8) + 2;
                    hp += bonus_hp;
                } else if (atributes[2] === 15) {
                    const bonus_hp = dice_roll(1, 8) + 1;
                    hp += bonus_hp;
                } else if (atributes[2] >= 7) {
                    const bonus_hp = dice_roll(1, 8);
                    hp += bonus_hp;
                } else if (atributes[2] >= 4) {
                    const bonus_hp = dice_roll(1, 8) - 1;

                    if (bonus_hp > 0) {
                        hp += bonus_hp;
                    }
                } else {
                    const bonus_hp = dice_roll(1, 8) - 2;

                    if (bonus_hp > 0) {
                        hp += bonus_hp;
                    }
                }
            }
        }

        if (level > 9) {
            for (let i = 0; i < level - 9; i++) {
                hp += 2;
            }
        }
    }
    if (job === 'rogue') {
        atributes.push(raw_atributes[5]);
        atributes.push(raw_atributes[0]);
        atributes.push(raw_atributes[4]);
        atributes.push(raw_atributes[2]);
        atributes.push(raw_atributes[3]);
        atributes.push(raw_atributes[1]);

        hp = 6;

        switch (race) {
            case 'dwarf':
                atributes[2] += 1;
                atributes[5] -= 1;
                break;
            case 'elf':
                atributes[1] += 1;
                atributes[2] -= 1;
                break;
            case 'gnome':
                atributes[3] += 1;
                atributes[4] -= 1;
                break;
            case 'halfling':
                atributes[1] += 1;
                atributes[0] -= 1;
                break;
        }

        if (atributes[2] === 15) {
            hp += 1;
        } else if (atributes[2] >= 16) {
            hp += 2;
        }

        if (level > 1) {
            for (let i = 0; i < level - 1; i++) {
                if (atributes[2] >= 17) {
                    const bonus_hp = dice_roll(2, 6) + 2;
                    hp += bonus_hp;
                } else if (atributes[2] === 16) {
                    const bonus_hp = dice_roll(1, 6) + 2;
                    hp += bonus_hp;
                } else if (atributes[2] === 15) {
                    const bonus_hp = dice_roll(1, 6) + 1;
                    hp += bonus_hp;
                } else if (atributes[2] >= 7) {
                    const bonus_hp = dice_roll(1, 6);
                    hp += bonus_hp;
                } else if (atributes[2] >= 4) {
                    const bonus_hp = dice_roll(1, 6) - 1;

                    if (bonus_hp > 0) {
                        hp += bonus_hp;
                    }
                } else {
                    const bonus_hp = dice_roll(1, 6) - 2;

                    if (bonus_hp > 0) {
                        hp += bonus_hp;
                    }
                }
            }
        }

        if (level > 9) {
            for (let i = 0; i < level - 9; i++) {
                hp += 2;
            }
        }
    }
    if (job === 'arcane') {
        atributes.push(raw_atributes[5]);
        atributes.push(raw_atributes[3]);
        atributes.push(raw_atributes[4]);
        atributes.push(raw_atributes[0]);
        atributes.push(raw_atributes[1]);
        atributes.push(raw_atributes[2]);

        hp = 4;

        switch (race) {
            case 'dwarf':
                atributes[2] += 1;
                atributes[5] -= 1;
                break;
            case 'elf':
                atributes[1] += 1;
                atributes[2] -= 1;
                break;
            case 'gnome':
                atributes[3] += 1;
                atributes[4] -= 1;
                break;
            case 'halfling':
                atributes[1] += 1;
                atributes[0] -= 1;
                break;
        }

        if (atributes[2] === 15) {
            hp += 1;
        } else if (atributes[2] >= 16) {
            hp += 2;
        }

        if (level > 1) {
            for (let i = 0; i < level - 1; i++) {
                if (atributes[2] >= 17) {
                    const bonus_hp = dice_roll(2, 4) + 2;
                    hp += bonus_hp;
                } else if (atributes[2] === 16) {
                    const bonus_hp = dice_roll(1, 4) + 2;
                    hp += bonus_hp;
                } else if (atributes[2] === 15) {
                    const bonus_hp = dice_roll(1, 4) + 1;
                    hp += bonus_hp;
                } else if (atributes[2] >= 7) {
                    const bonus_hp = dice_roll(1, 4);
                    hp += bonus_hp;
                } else if (atributes[2] >= 4) {
                    const bonus_hp = dice_roll(1, 4) - 1;

                    if (bonus_hp > 0) {
                        hp += bonus_hp;
                    }
                } else {
                    const bonus_hp = dice_roll(1, 4) - 2;

                    if (bonus_hp > 0) {
                        hp += bonus_hp;
                    }
                }
            }
        }

        if (level > 9) {
            for (let i = 0; i < level - 9; i++) {
                hp += 1;
            }
        }
    }

    output.Attributes = {
        STR: atributes[0],
        DEX: atributes[1],
        CON: atributes[2],
        INT: atributes[3],
        WIS: atributes[4],
        CHA: atributes[5],
    };
    output.Hp = hp;

    return output;
};

console.log(character('elf', 'female', 'men at arms', 1, 8));
