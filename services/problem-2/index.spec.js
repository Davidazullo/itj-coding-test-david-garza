const { get_sum_solution } = require('.');

test('get_sum_solution should return the only solution when dealing with positive numbers', () => {
  const number_array = [2, 7, 11, 15];
  const target = 9;
  const sum_solution = get_sum_solution(number_array, target);
  expect(sum_solution).toEqual(expect.arrayContaining([0, 1]));
});

test('get_sum_solution should return the first solution when dealing with positive numbers and multiple solutions', () => {
  const number_array = [2, 4, 5, 11, 15, 7];
  const target = 9;
  const sum_solution = get_sum_solution(number_array, target);
  expect(sum_solution).toEqual(expect.arrayContaining([1, 2]));
});

test('get_sum_solution should return the only solution when dealing with negative numbers', () => {
  const number_array = [-2, -7, -11, -15];
  const target = -17;
  const sum_solution = get_sum_solution(number_array, target);
  expect(sum_solution).toEqual(expect.arrayContaining([0, 3]));
});

test('get_sum_solution should return the first solution when dealing with negative numbers and multiple solutions', () => {
  const number_array = [-6, -4, -5, -11, -15, -7, -14];
  const target = -20;
  const sum_solution = get_sum_solution(number_array, target);
  expect(sum_solution).toEqual(expect.arrayContaining([2, 4]));
});

test('get_sum_solution should return the only solution when dealing with mixed numbers', () => {
  const number_array = [2, -7, 11, -15];
  const target = 4;
  const sum_solution = get_sum_solution(number_array, target);
  expect(sum_solution).toEqual(expect.arrayContaining([1, 2]));
});

test('get_sum_solution should return the first solution when dealing with mixed numbers and multiple solutions', () => {
  const number_array = [-11, 15, -7, 6, -4, 5, 22];
  const target = 11;
  const sum_solution = get_sum_solution(number_array, target);
  expect(sum_solution).toEqual(expect.arrayContaining([1, 4]));
});
