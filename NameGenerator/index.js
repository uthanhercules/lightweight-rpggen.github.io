const {
    dwarf_first_name_m,
    dwarf_first_name_f,
    dwarf_last_name,
    elf_first_name_m,
    elf_first_name_f,
    elf_last_name,
    human_first_name_m,
    human_first_name_f,
    human_last_name,
    gnome_first_name_m,
    gnome_first_name_f,
    gnome_nickname,
    gnome_last_name,
    halfling_first_name_m,
    halfling_first_name_f,
    halfling_last_name,
    half_elf_first_name_m,
    half_elf_first_name_f,
    half_elf_last_name,
} = require('./names_list');

const { random_index } = require('../utilities');

const name = (race, gender) => {
    if (race === 'dwarf') {
        if (gender === 'male') {
            const first_index = random_index(dwarf_first_name_m.length - 1);
            const last_index = random_index(dwarf_last_name.length - 1);

            return `${dwarf_first_name_m[first_index]} ${dwarf_last_name[last_index]}`;
        }
        if (gender === 'female') {
            const first_index = random_index(dwarf_first_name_f.length - 1);
            const last_index = random_index(dwarf_last_name.length - 1);

            return `${dwarf_first_name_f[first_index]} ${dwarf_last_name[last_index]}`;
        }
    }

    if (race === 'elf') {
        if (gender === 'male') {
            const first_index = random_index(elf_first_name_m.length - 1);
            const last_index = random_index(elf_last_name.length - 1);

            return `${elf_first_name_m[first_index]} ${elf_last_name[last_index]}`;
        }
        if (gender === 'female') {
            const first_index = random_index(elf_first_name_f.length - 1);
            const last_index = random_index(elf_last_name.length - 1);

            return `${elf_first_name_f[first_index]} ${elf_last_name[last_index]}`;
        }
    }

    if (race === 'human') {
        if (gender === 'male') {
            const first_index = random_index(human_first_name_m.length - 1);
            const last_index = random_index(human_last_name.length - 1);

            return `${human_first_name_m[first_index]} ${human_last_name[last_index]}`;
        }
        if (gender === 'female') {
            const first_index = random_index(human_first_name_f.length - 1);
            const last_index = random_index(human_last_name.length - 1);

            return `${human_first_name_f[first_index]} ${human_last_name[last_index]}`;
        }
    }

    if (race === 'gnome') {
        if (gender === 'male') {
            const first_index = random_index(gnome_first_name_m.length - 1);
            const nick_index = random_index(gnome_nickname.length - 1);
            const last_index = random_index(gnome_last_name.length - 1);

            return `${gnome_first_name_m[first_index]} "${gnome_nickname[nick_index]}" ${gnome_last_name[last_index]}`;
        }
        if (gender === 'female') {
            const first_index = random_index(gnome_first_name_f.length - 1);
            const nick_index = random_index(gnome_nickname.length - 1);
            const last_index = random_index(gnome_last_name.length - 1);

            return `${gnome_first_name_f[first_index]} "${gnome_nickname[nick_index]}" ${gnome_last_name[last_index]}`;
        }
    }

    if (race === 'halfling') {
        if (gender === 'male') {
            const first_index = random_index(halfling_first_name_m.length - 1);
            const last_index = random_index(halfling_last_name.length - 1);

            return `${halfling_first_name_m[first_index]} ${halfling_last_name[last_index]}`;
        }
        if (gender === 'female') {
            const first_index = random_index(halfling_first_name_f.length - 1);
            const last_index = random_index(halfling_last_name.length - 1);

            return `${halfling_first_name_f[first_index]} ${halfling_last_name[last_index]}`;
        }
    }

    if (race === 'half elf') {
        if (gender === 'male') {
            const first_index = random_index(half_elf_first_name_m.length - 1);
            const last_index = random_index(half_elf_last_name.length - 1);

            return `${half_elf_first_name_m[first_index]} ${half_elf_last_name[last_index]}`;
        }
        if (gender === 'female') {
            const first_index = random_index(half_elf_first_name_f.length - 1);
            const last_index = random_index(half_elf_last_name.length - 1);

            return `${half_elf_first_name_f[first_index]} ${half_elf_last_name[last_index]}`;
        }
    }
};

module.exports = { name };
