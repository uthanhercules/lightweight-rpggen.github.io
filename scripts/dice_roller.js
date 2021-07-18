let dices_added = [];
let dices_added_output = [];
let rolled = false;

function dice_roll(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function add_dice(number_of_faces) {
    console.log(rolled);
    if (rolled) {
        document.querySelector('#roll_output').innerHTML = 'Your Roll';
        document.querySelector('#dices_output').innerHTML = 'Your Dices';
        dices_added = [];
        dices_added_output = [];
        rolled = false;
    }

    switch (number_of_faces) {
        case 2:
            dices_added.push(2);
            dices_added_output.push('D2');
            break;
        case 4:
            dices_added.push(4);
            dices_added_output.push('D4');
            break;
        case 6:
            dices_added.push(6);
            dices_added_output.push('D6');
            break;
        case 8:
            dices_added.push(8);
            dices_added_output.push('D8');
            break;
        case 10:
            dices_added.push(10);
            dices_added_output.push('D10');
            break;
        case 12:
            dices_added.push(12);
            dices_added_output.push('D12');
            break;
        case 20:
            dices_added.push(20);
            dices_added_output.push('D20');
            break;
        case 100:
            dices_added.push(100);
            dices_added_output.push('D100');
            break;
    }

    if (dices_added.length > 8) {
        document.querySelector('#dices_output').innerHTML = `${dices_added_output
            .slice(0, 8)
            .join(' + ')}...(${dices_added.length})`;
    } else {
        document.querySelector('#dices_output').innerHTML = dices_added_output.join(' + ');
    }
}

function roll_the_dice() {
    if (dices_added.length === 0) {
        document.querySelector('#roll_output').innerHTML = 'Pick a Dice';
        return;
    }

    const sum_of_dices = (accumulator, currentValue) => accumulator + currentValue;
    const max_number = dices_added.reduce(sum_of_dices) + 1;
    const min_number = dices_added.length;
    let mod = parseInt(document.querySelector('#mod').value);
    let signal = '+';

    console.log(mod);

    if (isNaN(mod)) {
        mod = 0;
    }

    if (mod < 0) {
        signal = '-';
    }

    const roll_value = dice_roll(min_number, max_number);
    const output = `${roll_value} ${signal} ${-mod} = ${roll_value + mod}`;

    document.querySelector('#roll_output').innerHTML = output;
    rolled = true;
}
