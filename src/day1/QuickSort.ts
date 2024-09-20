export default function quick_sort(arr: number[]) {
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], low: number, high: number) {
    if (low >= high) {
        return;
    }

    const pivotIdx = partition(arr, low, high);
    console.log("idx", pivotIdx, "val", arr[pivotIdx]);

    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number) {
    const pivot = arr[high]; // compare to pivot

    let idx = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            idx++;
            // swap
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }

    idx++;

    arr[high] = arr[idx];
    arr[idx] = pivot;
    // [arr[idx], arr[high]] = [arr[high], arr[idx]];

    return idx;
}

const arr = [99, 370, 7, 4, 69, 420, 42];

console.log(quick_sort(arr));
console.log("after", arr);
