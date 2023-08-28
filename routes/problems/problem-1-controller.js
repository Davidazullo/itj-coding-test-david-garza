const { get_number_array_from_file } = require('../../services/utils');
const { get_missing_numbers } = require('../../services/problem-1');

async function problem_1_controller(req, res) {
  try {
    const filepath = process.env.FILEPATH || 'tests_data/current_test.txt';
    const number_array = get_number_array_from_file(filepath);
    const result = get_missing_numbers(number_array);
    res.status(200).json(result);
  } catch (err) {
    console.error(`(problem-1-controller) Error on treatment: ${err}`);

    res.status(500).send({}).end();
  }
}

module.exports = problem_1_controller;
