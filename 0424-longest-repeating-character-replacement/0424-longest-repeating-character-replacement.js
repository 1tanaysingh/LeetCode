/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const count = new Map();
    let left = 0;
    let maxFreq = 0;
    let best = 0;

    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        count.set(c, (count.get(c) || 0) + 1);
        maxFreq = Math.max(maxFreq, count.get(c));

        // chars to replace = windowSize - mostFrequentChar
        if (right - left + 1 - maxFreq > k) {
            const l = s[left];
            count.set(l, count.get(l) - 1);
            left++;
        }

        best = Math.max(best, right - left + 1);
    }

    return best;
};