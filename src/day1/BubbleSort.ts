// O(n2) to the power of 2
export default function bubble_sort(arr: number[]): void {
    console.log("Arr is", arr);
    // [9,   3,  7, 4, 69, 420, 42]
    for (let i = 0; i < arr.length; i++) {
        console.log("I is", arr[i]);

        for (let j = 0; j < arr.length - 1 - i; j++) {
            console.log("J is", arr[j]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
