const fs = require('fs');

function get_number_array_from_file(filepath) {
    const sanitized_input = fs.readFileSync(filepath).toString().replace(/[^0-9,]/g, '');
    const array = sanitized_input.split(',').filter(x => x !== '');
    return array;
}

module.exports = {
    get_number_array_from_file
};
