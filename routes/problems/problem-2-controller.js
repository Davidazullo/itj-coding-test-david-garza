const { get_number_array_from_file } = require('../../services/utils');
const { get_sum_solution } = require('../../services/problem-2');

async function problem_2_controller(req, res) {
  try {
    const { target } = req.query;
    const filepath = process.env.FILEPATH || 'tests_data/current_test.txt';

    const number_array = get_number_array_from_file(filepath);
    const result = get_sum_solution(number_array, target);
    res.status(200).json(result);
  } catch (err) {
    console.error(`(problem-2-controller) Error on treatment: ${err}`);

    res.status(500).send({}).end();
  }
}

module.exports = problem_2_controller;
