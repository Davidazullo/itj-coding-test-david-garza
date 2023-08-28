# Full-Stack Mid Level Coding Test
**Candidate Name**: David Andrés Garza Medina

## Instructions
Problems can be solved in the language you feel most comfortable with. **These questions evaluate your knowledge of data structures and algorithms to optimize a solution to common problems**. Make sure to understand the question correctly. Validate your assumptions by considering various inputs and outputs. Ensure you understand the time complexity of the solution before writing it, and see if it can be improved.

Upload the solutions to a private repository on GitHub and add the following users for review: john.guenin@dexcom.com, stephen.kom@dexcom.com, lucas.hill@dexcom.com, gloria.friesen@dexcom.com.

## Problem 1
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

## Problem 2
Given a list of integers nums and an integer target, write a function that solves the following problem; return indices of the **two numbers** such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
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
- Only one valid answer exists.

Bonus:
- Describe solution
- Add time and space complexity
- Write unit tests
