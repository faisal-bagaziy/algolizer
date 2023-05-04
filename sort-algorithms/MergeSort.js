import React from 'react';
import { newTrace, addToTrace, createKey } from './helpers';

const MergeSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  function merge(original, start, mid, end) {
    const left = original.slice(start, mid);
    const right = original.slice(mid, end);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        addToTrace(trace, original, [], [], [], [k + start]);
        original[k + start] = left[i];
        i++;
        addToTrace(trace, original, [], [], [], [k + start]);
      } else {
        addToTrace(trace, original, [], [], [], [k + start]);
        original[k + start] = right[j];
        j++;
        addToTrace(trace, original, [], [], [], [k + start]);
      }
      k++;
    }
    while (i < left.length) {
      addToTrace(trace, original, [], [], [], [k + start]);
      original[k + start] = left[i];
      i++;
      k++;
      addToTrace(trace, original, [], [], [], [k + start]);
    }
    while (j < right.length) {
      addToTrace(trace, original, [], [], [], [k + start]);
      original[k + start] = right[j];
      j++;
      k++;
      addToTrace(trace, original, [], [], [], [k + start]);
    }

    left.length = 0;
    right.length = 0;
  }

  function recursiveMergeSort(original, start, end) {
    const length = end - start;
    if (length < 2) {
      // original = []
      if (length < 1) return original;
      // original = [x]
      else return [original[start]];
    }

    const midPoint = Math.floor((start + end) / 2);

    // Visualize: First Half
    addToTrace(
      trace,
      original,
      [],
      [...Array(midPoint - start).keys()].map((i) => i + start)
    );
    recursiveMergeSort(original, start, midPoint);

    // Visualize: Second Half
    addToTrace(
      trace,
      original,
      [],
      [...Array(end - midPoint).keys()].map((i) => i + midPoint)
    );
    recursiveMergeSort(original, midPoint, end);

    merge(original, start, midPoint, end);
  }

  recursiveMergeSort(nums, 0, nums.length);

  // Visualize: Mark all elements as sorted
  addToTrace(trace, nums, [...Array(nums.length).keys()]);
  return trace;
};

export const MergeSortKey = createKey(
  'Call Merge Sort',
  null,
  'Overwrite from axillary array'
);
export const MergeSortDesc = {
  title: 'Merge Sort',
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Merge_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merge Sort
        </a>{' '}
        is an efficient, stable sorting algorith that makes use of the
        divide and conquer strategy. Conceptually the algorithm works as
        follows:
      </p>
      <ol>
        <li>
          Divide the unsorted list into <em>n</em> sublists, each
          containing one element(a list of one element is considered
          sorted)
        </li>
        <li>
          Repeatedly merge sublists to produce new sorted sublists until
          there is only one sublist remaining. This will be the sorted
          list.
        </li>
      </ol>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: (
    <span>
      O(<em>n</em>)
    </span>
  ),
  codeString: `MergeSort(array, left, right)   
        if left > right 
            return
        mid = (left+right)/2
        mergeSort(array, left, mid)
        mergeSort(array, mid+1, right)
        merge(array, left, mid, right)

    Merge(array, left, mid, right )
        n1  = mid - left +  1
        n2 = right - mid
        let L[1 .. n1 +1] and R[1 .. n2 + 1]
        for  i = 1 to n1 
            L[i] = A[left + i - 1]
        for j = 1 to n2
            R[j] = A[mid + j]
        L[n1 + 1] , L[n2 + 1] = Infinity
        i = 1
        j = 1
        for k = left to right
            if L[i] ≤ R[j]
                A[k]  = L[i]
                i = i  + 1
            else A[k] = R[j]
                j = j + 1 `
};
export default MergeSort;
