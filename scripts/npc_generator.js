const appearances = [
    'Flashy jewel',
    'Piercings',
    'Fancy or foreign clothing',
    'Formal and clean clothes',
    'Torn and dirty clothes',
    'Notorious scar',
    'Missing tooth',
    'Missing fingers',
    'Unusual eye color (or two different colors)',
    'Tattoos',
    'Birthmark',
    'Unusual skin color',
    'Bald',
    'Beard or braided hair',
    'Unusual hair color',
    'Nervous eye movement',
    'Distinct nose',
    'Distinct posture (crooked or rigid)',
    'Exceptionally beautiful',
    'Exceptionally ugly',
];

const talents = [
    'Play a musical instrument',
    'Speaks several languages fluently',
    'Unbelievably lucky',
    'Perfect memory',
    'Good with animals',
    'Good with children',
    'Good at solving puzzles',
    'Good in a game',
    'Good at imitation',
    'Draw beautifully',
    'Paint beautifully',
    'Sing beautifully',
    'Drink everything on the table',
    'Expert carpenter',
    'Specialist cook',
    'Specialist in throwing darts and making rocks bounce',
    'Expert juggler',
    'Actor and master of disguise expert',
    'Experienced dancer',
    'Know thief slang ',
];

const traits = [
    'argumentative',
    'honest',
    'arrogant',
    'warmed up',
    'noisy',
    'irritable',
    'rude',
    'weighted',
    'curious',
    'still',
    'friendly',
    'suspicious',
];

const signatures = [
    'Inclined to sing, whistle or mumble quickly',
    'It speaks in rhymes or in some other peculiar way',
    'Particularly low or high voice',
    'Incomprehensible words, stammers or stutters',
    'Speaks too clearly',
    'Speak screaming',
    'Whispers',
    'Speaks embellished or with long words',
    'Uses wrong words often',
    'Use insults and exclamations',
    'Make jokes and puns constantly',
    'Inclined to dramatic predictions',
    'Impatient',
    'Cross-eyed',
    'Distant look',
    'Chew something',
    'Patient',
    'Snap your fingers',
    'It bites your nails',
    'Curl your hair or pull your beard',
];

const flaws = [
    'Love lost or susceptible to falling in love',
    'Likes hidden pleasures',
    'Arrogant',
    "Envy another creature's possessions or rank",
    'Unbridled greed 6 Inclined to rage',
    'It has a powerful enemy',
    'Specific phobia',
    'Shameful or scandalous story',
    'Secret crime or offence',
    'Has forbidden knowledge',
    'Reckless bravery ',
];

const alignment_actions = ['lawful', 'neutral', 'chaotic'];
const alignment_moral = ['good', 'neutral', 'evil'];

const dwarf_first_name_m = [
    'Adrik',
    'Alberich',
    'Baern',
    'Barendd',
    'Brottor',
    'Bruenor',
    'Dain',
    'Darrak',
    'Delg',
    'Eberk',
    'Einkil',
    'Fargrim',
    'Flint',
    'Gardain',
    'Harbek',
    'Kildrak',
    'Morgran',
    'Orsik',
    'Oskar',
    'Rangrim',
    'Rurik',
    'Taklinn',
    'Thoradin',
    'Thorin',
    'Tordek',
    'Traubon',
    'Travok',
    'Ulfgar',
    'Veit',
    'Vondal',
];
const dwarf_first_name_f = [
    'Amber',
    'Artin',
    'Audhild',
    'Bardryn',
    'Dagnal',
    'Diesa',
    'Eldeth',
    'Falkrunn',
    'Gunnloda',
    'Gurdis',
    'Helja',
    'Hlin',
    'Kathra',
    'Kristryd',
    'Ilde',
    'Liftrasa',
    'Mardred',
    'Riswynn',
    'Sannl',
    'Torbera',
    'Torgga',
    'Vistra',
];
const dwarf_last_name = [
    'Balderk',
    'Battlehammer',
    'Brawnanvil',
    'Dankil',
    'Fireforge',
    'Frostbeard',
    'Gorunn',
    'Holderhek',
    'Ironfist',
    'Loderr',
    'Lutgehr',
    'Rumnaheim',
    'Strakeln',
    'Torunn',
    'Ungart',
];

const elf_first_name_m = [
    'Adran',
    'Aelar',
    'Aramil',
    'Arannis',
    'Aust',
    'Beiro',
    'Berrian',
    'Carric',
    'Enialis',
    'Erdan',
    'Erevan',
    'Galinndan',
    'Hadarai',
    'Heian',
    'Himo',
    'Immeral',
    'Ivellios',
    'Laucian',
    'Mindartis',
    'Paelias',
    'Peren',
    'Quarion',
    'Riardon',
    'Rolen',
    'Soveliss',
    'Thamior',
    'Tharivol',
    'Theren',
    'Varis',
];
const elf_first_name_f = [
    'Adrie',
    'Althaea',
    'Anastrianna',
    'Andraste',
    'Antinua',
    'Bethrynna',
    'Birel',
    'Caelynn',
    'Drusilia',
    'Enna',
    'Felosial',
    'Ielenia',
    'Jelenneth',
    'Keyleth',
    'Leshanna',
    'Lia',
    'Meriele',
    'Mialee',
    'Naivara',
    'Quelenna',
    'Quillathe',
    'Sariel',
    'Shanairra',
    'Shava',
    'Silaqui',
    'Theirastra',
    'Thia',
    'Vadania',
    'Valanthe',
    'Xanaphia',
];
const elf_last_name = [
    'Amakiir',
    'Amastacia',
    'Galanodel',
    'Holimion',
    'Ilphelkiir',
    'Liadon',
    'Meliamne',
    'Nailo',
    'Siannodel',
    'Xiloscient',
];

const human_first_name_m = [
    'Darvin',
    'Dorn',
    'Evendur',
    'Gorstag',
    'Grim',
    'Helm',
    'Malark',
    'Morn',
    'Randal',
    'Stedd',
    'Bor',
    'Fodel',
    'Glar',
    'Grigor',
    'Igan',
    'Ivor',
    'Kosef',
    'Mival',
    'Orel',
    'Pavel',
    'Sergor',
    'Ander',
    'Blath',
    'Bran',
    'Frath',
    'Geth',
    'Lander',
    'Luth',
    'Malcer',
    'Stor',
    'Taman',
    'Urth',
    'Aoth',
    'Bareris',
    'Ehput-Ki',
    'Kethoth',
    'Mumed',
    'Ramas',
    'So-Kehur',
    'Thazar-De',
    'Urhur',
    'Borivik',
    'Faurgar',
    'Jandar',
    'Kanithar',
    'Madislak',
    'Ralmevik',
    'Shaumar',
    'Vladislak',
    'An',
    'Chen',
    'Chi',
    'Fai',
    'Jiang',
    'Jun',
    'Lian',
    'Long',
    'Meng',
    'On',
    'Shan',
    'Shui',
    'Wen',
    'Anton',
    'Diero',
    'Marcon',
    'Pieron',
    'Rimardo',
    'Romero',
    'Salazar',
    'Umbero',
];
const human_first_name_f = [
    'Arveene',
    'Esvele',
    'Jhessail',
    'Kerri',
    'Lureene',
    'Miri',
    'Rowan',
    'Shandri',
    'Tessele',
    'Alethra',
    'Kara',
    'Katernin',
    'Mara',
    'Natali',
    'Olma',
    'Tana',
    'Zora',
    'Amafrey',
    'Betha',
    'Cefrey',
    'Kethra',
    'Mara',
    'Olga',
    'Silifrey',
    'Westra',
    'Arizima',
    'Chathi',
    'Nephis',
    'Nulara',
    'Murithi',
    'Sefris',
    'Thola',
    'Umara',
    'Zolis',
    'Fyevarra',
    'Hulmarra',
    'Immith',
    'Imzel',
    'Navarra',
    'Shevarra',
    'Tammith',
    'Yuldra',
    'Bai',
    'Chao',
    'Jia',
    'Lei',
    'Mei',
    'Qiao',
    'Shui',
    'Tai',
    'Balama',
    'Dona',
    'Faila',
    'Jalana',
    'Luisa',
    'Marta',
    'Quara',
    'Selise',
    'Vonda',
];
const human_last_name = [
    'Amblecrown',
    'Buckman',
    'Dundragon',
    'Evenwood',
    'Greycastle',
    'Tallstag',
    'Bersk',
    'Chernin',
    'Dotsk',
    'Kulenov',
    'Marsk',
    'Nemetsk',
    'Shemov',
    'Starag',
    'Brightwood',
    'Helder',
    'Hornraven',
    'Lackman',
    'Stormwind',
    'Windrivver',
    'Ankhalab',
    'Anskuld',
    'Fezim',
    'Hahpet',
    'Nathandem',
    'Sepret',
    'Uuthrakt',
    'Chergoba',
    'Dyernina',
    'Iltazyara',
    'Murnyethara',
    'Stayanoga',
    'Ulmokina',
    'Chien',
    'Huang',
    'Kao',
    'Kung',
    'Lao',
    'Ling',
    'Mei',
    'Pin',
    'Shin',
    'Sum',
    'Tan',
    'Wan',
    'Agosto',
    'Astorio',
    'Calabra',
    'Domine',
    'Falone',
    'Marivaldi',
    'Pisacar',
    "Ram'ondo",
];

const gnome_first_name_m = [
    'Alston',
    'Alvyn',
    'Boddynock',
    'Brocc',
    'Burgell',
    'Dimble',
    'Eldon',
    'Erky',
    'Fonkin',
    'Frug',
    'Gerbo',
    'Gimble',
    'Glim',
    'Jebeddo',
    'Kellen',
    'Namfoodle',
    'Orryn',
    'Roondar',
    'Seebo',
    'Sindri',
    'Warryn',
    'Wrenn',
    'Zook',
];
const gnome_first_name_f = [
    'Bimpnottin',
    'Breena',
    'Caramip',
    'Carlin',
    'Donella',
    'Duvamil',
    'Ella',
    'Ellyjobell',
    'Ellywick',
    'Lilli',
    'Loopmottin',
    'Lorilla',
    'Mardnab',
    'Nissa',
    'Nyx',
    'Oda',
    'Orla',
    'Roywyn',
    'Shamil',
    'Tana',
    'Waywocket',
    'Zanna',
];
const gnome_nickname = [
    'Aleslosh',
    'Ashhearth',
    'Badger',
    'Cloak',
    'Doublelock',
    'Filchbatter',
    'Fnipper',
    'Ku',
    'Nim',
    'Oneshoe',
    'Pock',
    'Sparklegem',
    'Stumbleduck',
];
const gnome_last_name = [
    'Beren',
    'Daergel',
    'Folkor',
    'Garrick',
    'Nackle',
    'Murnig',
    'Ningel',
    'Raulnor',
    'Scheppen',
    'Timbers',
    'Turen',
];

const halfling_first_name_m = [
    'Alton',
    'Ander',
    'Cade',
    'Corrin',
    'Eldon',
    'Errich',
    'Finnan',
    'Garret',
    'Lindal',
    'Lyle',
    'Merric',
    'Milo',
    'Osborn',
    'Perrin',
    'Reed',
    'Roscoe',
    'Wellby',
];
const halfling_first_name_f = [
    'Andry',
    'Bree',
    'Callie',
    'Cora',
    'Euphemia',
    'Jillian',
    'Kithri',
    'Lavinia',
    'Lidda',
    'Merla',
    'Nedda',
    'Paela',
    'Portia',
    'Seraphina',
    'Shaena',
    'Trym',
    'Vani',
    'Verna',
];
const halfling_last_name = [
    'Brushgather',
    'Goodbarrel',
    'Greenbottle',
    'High-hill',
    'Hilltopple',
    'Leagallow',
    'Tealeaf',
    'Thorngage',
    'Tosscobble',
    'Underbough',
];

const half_elf_first_name_m = [...elf_first_name_m, ...human_first_name_m];
const half_elf_first_name_f = [...elf_first_name_f, ...human_first_name_f];
const half_elf_last_name = [...elf_last_name, ...human_last_name];

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
        Trait: capitalize(Trait),
        Talent,
        Flaw,
        Signature,
        Alignment: null,
    };

    if (first_alignment === second_alignment) {
        output.Alignment = capitalize(`${first_alignment}`);
    } else {
        output.Alignment = capitalize(`${first_alignment} ${second_alignment}`);
    }

    return output;
};

const character_name = (race, gender) => {
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

const character_adnd = (race, gender, job, level, min_attribute_value) => {
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
        Name: character_name(race, gender),
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

    const raw_atributes = atributes_values(min_attribute_value);
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
                break;
            case 19:
                hp += 5;
                break;
        }

        if (level > 1) {
            for (let i = 0; i < level - 1; i++) {
                if (atributes[2] === 19) {
                    const bonus_hp = dice_roll(2, 10) + 5;
                    hp += bonus_hp;
                } else if (atributes[2] === 18) {
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

function generate_character() {
    const race = document.querySelector('#race_list').value;
    const gender = document.querySelector('#gender_list').value;
    const job = document.querySelector('#class_list').value;
    let level = parseInt(document.querySelector('#level').value);
    let min_attribute_value = parseInt(document.querySelector('#min_attribute').value);
    const system = document.querySelector('#system_list').value;

    if (isNaN(level)) {
        level = 1;
    }
    if (isNaN(min_attribute_value)) {
        min_attribute_value = 8;
    }
    if (level < 1) {
        level = 1;
    }
    if (min_attribute_value < 1) {
        min_attribute_value = 1;
    }

    if (system === 'adnd') {
        if (level > 20) {
            level = 20;
        }
        if (min_attribute_value > 18) {
            min_attribute_value = 18;
        }

        const character = character_adnd(race, gender, job, level, min_attribute_value);

        document.querySelector('#character_name').innerHTML = character.Name;
        document.querySelector('#character_race').innerHTML = character.Race;
        document.querySelector('#character_gender').innerHTML = character.Gender;
        document.querySelector('#character_class').innerHTML = character.Class;
        document.querySelector('#character_hp').innerHTML = character.Hp;
        document.querySelector('#character_level').innerHTML = character.Level;

        document.querySelector('#character_str').innerHTML = String(character.Attributes.STR);
        document.querySelector('#character_dex').innerHTML = String(character.Attributes.DEX);
        document.querySelector('#character_con').innerHTML = String(character.Attributes.CON);
        document.querySelector('#character_int').innerHTML = String(character.Attributes.INT);
        document.querySelector('#character_wis').innerHTML = String(character.Attributes.WIS);
        document.querySelector('#character_cha').innerHTML = String(character.Attributes.CHA);

        document.querySelector('#character_age').innerHTML = String(character.About.Age);
        document.querySelector('#character_height').innerHTML = String(character.About.Height);
        document.querySelector('#character_weight').innerHTML = String(character.About.Weight);
        document.querySelector('#character_alignment').innerHTML = character.About.Alignment;
        document.querySelector('#character_appearance').innerHTML = character.About.Appearance;
        document.querySelector('#character_trait').innerHTML = character.About.Trait;
        document.querySelector('#character_talent').innerHTML = character.About.Talent;
        document.querySelector('#character_flaw').innerHTML = character.About.Flaw;
        document.querySelector('#character_signature').innerHTML = character.About.Signature;

        document.querySelector('.character').style.display = 'block';
    } else if (system === 'generic') {
        const character = character_adnd(race, gender, job, level, min_attribute_value);

        document.querySelector('#character_name').innerHTML = character.Name;
        document.querySelector('#character_race').innerHTML = character.Race;
        document.querySelector('#character_gender').innerHTML = character.Gender;
        document.querySelector('#character_class').innerHTML = '—';
        document.querySelector('#character_hp').innerHTML = '—';
        document.querySelector('#character_level').innerHTML = character.Level;

        document.querySelector('#character_str').innerHTML = '—';
        document.querySelector('#character_dex').innerHTML = '—';
        document.querySelector('#character_con').innerHTML = '—';
        document.querySelector('#character_int').innerHTML = '—';
        document.querySelector('#character_wis').innerHTML = '—';
        document.querySelector('#character_cha').innerHTML = '—';

        document.querySelector('#character_age').innerHTML = `${character.About.Age}yo`;
        document.querySelector('#character_height').innerHTML = `${character.About.Height}cm`;
        document.querySelector('#character_weight').innerHTML = `${character.About.Weight}kg`;
        document.querySelector('#character_alignment').innerHTML = character.About.Alignment;
        document.querySelector('#character_appearance').innerHTML = character.About.Appearance;
        document.querySelector('#character_trait').innerHTML = character.About.Trait;
        document.querySelector('#character_talent').innerHTML = character.About.Talent;
        document.querySelector('#character_flaw').innerHTML = character.About.Flaw;
        document.querySelector('#character_signature').innerHTML = character.About.Signature;

        document.querySelector('.character').style.display = 'block';
    }
}
