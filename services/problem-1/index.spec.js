const { get_missing_numbers } = require('.');

test('get_missing_numbers should return the missing numbers in the array when some numbers are repeated', () => {
  const number_array = [4, 3, 2, 7, 8, 2, 3, 1];
  const missing_numbers = get_missing_numbers(number_array);
  expect(missing_numbers).toEqual([5, 6]);
});

test('get_missing_numbers should return the missing numbers in the array when all numbers are repeated', () => {
  const number_array = [1, 1];
  const missing_numbers = get_missing_numbers(number_array);
  expect(missing_numbers).toEqual([2]);
});

test('get_missing_numbers should return an empty array when dealing with 1 item', () => {
  const number_array = [1];
  const missing_numbers = get_missing_numbers(number_array);
  expect(missing_numbers).toEqual([]);
});
