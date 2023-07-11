/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = [];

    const backtrack = (path, counter) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (const num in counter) {
            if (counter[num] > 0) {
                path.push(num);
                counter[num]--;
                backtrack(path, counter);
                path.pop();
                counter[num]++;
            }
        }
    };

    const counter = {};
    for (const num of nums) {
        counter[num] = (counter[num] || 0) + 1;
    }

    backtrack([], counter);
    return result;
};
