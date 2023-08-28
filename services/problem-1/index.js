function get_missing_numbers(number_array) {
    const nums_set = new Set(number_array);
    const missing_numbers = new Set();
    for (let i = 0; i < number_array.length; i++) {
        const current_number = i + 1;
        if (!nums_set.has(current_number)) {
            missing_numbers.add(current_number);
        }
    }

    return Array.from(missing_numbers);
}

module.exports = {
    get_missing_numbers
};
