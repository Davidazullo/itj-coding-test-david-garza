function get_sum_solution(number_array, target) {
    const nums_map = new Map();
    for (let i = 0; i < number_array.length; i++) {
        const current_number = number_array[i];

        const complement = target - current_number;
        if (nums_map.has(complement)) {
            const complement_idx = nums_map.get(complement);
            return [i, complement_idx];
        }

        nums_map.set(current_number, i);
    }
}

module.exports = {
    get_sum_solution
};
