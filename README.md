# Full-Stack Mid Level Coding Test
**Candidate Name**: David Andrés Garza Medina

Table of Contents:
- [Full-Stack Mid Level Coding Test](#full-stack-mid-level-coding-test)
  - [Instructions](#instructions)
    - [Problem 1](#problem-1)
    - [Problem 2](#problem-2)
  - [Problem Solutions](#problem-solutions)
    - [Run server locally](#run-server-locally)
    - [Problem 1](#problem-1-1)
    - [Problem 2](#problem-2-1)

## Instructions
Problems can be solved in the language you feel most comfortable with. **These questions evaluate your knowledge of data structures and algorithms to optimize a solution to common problems**. Make sure to understand the question correctly. Validate your assumptions by considering various inputs and outputs. Ensure you understand the time complexity of the solution before writing it, and see if it can be improved.

Upload the solutions to a private repository on GitHub and add the following users for review: john.guenin@dexcom.com, stephen.kom@dexcom.com, lucas.hill@dexcom.com, gloria.friesen@dexcom.com.

### Problem 1
Given a list nums of n integers where nums[i] is in the range [1, list length], write a function that solves the following problem; return a list of all the integers in the range [1, list length] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Constraints:
- n == nums.length
- 1 <= n <= 10^5
- 1 <= nums[i] <= n

### Problem 2
Given a list of integers nums and an integer target, write a function that solves the following problem; return indices of the **two numbers** such that they add up to target.
You may assume that **each input would have exactly one solution**, and you **may not use the same element twice**.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- **Only one valid answer exists**.

Bonus:
- Describe solution
- Add time and space complexity
- Write unit tests

## Problem Solutions
### Run server locally
You can run the following commands to run the server locally (*you should be at the root of the project*):
```bash
# Optional: Use the latest version of Node with NVM (tested with Node v18.17.0)
nvm use --lts

# Install dependencies (this is done once)
npm install

# By default the server will listen on port 3000 and read the "tests_data/current_test.txt" file as input
# The content of such file should contain the numbers separated by comma (e.g. "1,2,2,4")
npm start

# You can change the listening port by prepending the port number
# PORT=3000 npm start
# You can also change the file path by prepending it
# FILEPATH=tests_data/current_test.txt npm start
# Or both
# PORT=3000 FILEPATH=tests_data/current_test.txt npm start
```

The server will now be accessible on port 3000!

To run the unit tests, you can run this command:
```bash
npm test
```

### Problem 1
**Note**: As described before, the input will be taken from the input file (*by default "tests_data/current_test"*). Please feel free to update its content or use other files as needed.

In this solution I iterate the input and look for the missing numbers by checking the presence of the current index.

A set was used in order to improve the performance of the algorithm, as it allows to check the presence of a number in O(1) complexity. Now, considering that the space complexity of the problem is at most O(n) when all the numbers are different, I would be iterating through all of them, making the time complexity equal, O(n). In recap, **the time and space complexity are both O(n)**.

In regards to the constraints, there is no problem as these limits are low for what NodeJS can handle and the algorith is already very efficient as well.

You can check the endpoint by going to this link (*assuming default settings*): http://localhost:3000/api/v1/problems/1

### Problem 2
**Note**: As described before, the input will be taken from the input file (*by default "tests_data/current_test"*). Also, in addition to the number array, **it also needs a target value passed as a query parameter** (*you can see the example call below*). Please feel free to update these variables as needed.

For this solution, I iterate the input and look if I have its complement using a map, if not, I add it back and keep looking. The map saves the complement value as key and the index as value, that way once the target complement is found, we can return the corresponding index by providing its complement value to the map. As stated by the problem, a solution it's guaranteed, so no default response have been provided as at least a solution should exist.

A map was used in this case to improve the performance of the algorithm, as this structure provides O(log(n)) complexity for its methods. Now, considering a space complexity of at most O(n) when the complement it's the last element, I would be iterating through all of its items, making the time complexity O(n) times O(log(n)). In summary, **the space complexity is O(n) while the time complexity is O(n*log(n))**.

In regards to the constraints, there is no problem as these limits are low for what NodeJS can handle and the algorith is already very efficient as well.

You can check the endpoint by going to this link (*assuming default settings*): http://localhost:3000/api/v1/problems/2?target=9
