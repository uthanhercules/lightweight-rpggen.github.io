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
} = require('./names_list');

const random_index = (highest_index) => {
    return Math.floor(Math.random() * highest_index);
};

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
};

console.log(name('human', 'male'));
