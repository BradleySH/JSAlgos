// Helper Methods

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//getDigit(7323, 2)

// 7323 / 100 = 73.23 with Math.floor = 73

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

//mostDigits([23, 567, 89, 12234444, 90])

// Radix Sort

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++){
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);
        }
        console.log(digitBuckets);
    }
}