const fs = require('fs');

function get_number_array_from_file(filepath) {
    const array = fs.readFileSync(filepath).toString().split(',');
    return array;
}

module.exports = {
    get_number_array_from_file
};
