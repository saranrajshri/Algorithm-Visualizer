export const LinearSearchCPP = `
#include<bits/stdc++.h>
using namespace std;

int linearSearch(vector<int> array, int target){
    for(int i = 0; i < n; i++){
        if(array[i] == target) return i;
    }
    return -1;
}

int main(){
    vector<int> array = {45, 22, 68, 99, 100 ,120};
    int target = 45;    
    cout << linearSearch(array, target) << endl;
    return 0;
}
`;

export const BinarySearchCPP = `
#include<bits/stdc++.h>
using namespace std;

int binarySearch(vector<int> array, int target){
    int left = 0;
    int right = array.size() - 1;

    while(left <= right){
        int mid = left + (right - left) / 2;
        if(array[mid] == target) return mid;
        else if (array[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main(){
    vector<int> array = {1, 2, 3, 4, 5, 6, 7, 8};
    int target = 7;
    cout << binarySearch(array, target) << endl;
    return 0;
}

`;

export const JumpSearchCPP = `
#include<bits/stdc++.h>
using namespace std;

int jumpSearch(vector<int> array, int target){
    int step = sqrt(n); 
  
    int prev = 0; 
    while (arr[min(step, n)-1] < x) 
    { 
        prev = step; 
        step += sqrt(n); 
        if (prev >= n) 
            return -1; 
    } 
  
    while (arr[prev] < x) 
    { 
        prev++; 
  
         
        if (prev == min(step, n)) 
            return -1; 
    } 
  
    if (arr[prev] == x) 
        return prev; 
  
    return -1; 
}

int main(){
    vector<int> array = {1, 2, 3, 4, 5, 6, 7, 8};
    int target = 7;
    cout << jumpSearch(array, target) << endl;
    return 0;
}

`;

// DP
export const FibonacciCPP = `
#include<bits/stdc++.h>
using namespace std;

int n = 15;
vector<int> dp(n);
dp[0] = 0;
dp[1] = 1;
void generateFibonacci(vector<int> dp){
    for(int i = 2; i < n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // Print values
    for(int x : dp) cout << x << endl;
}

int main(){
    generateFibonacci(array);
    return 0;
}

`;

// Backtracking
export const NQueensCPP = `
/* C/C++ program to solve N Queen Problem using 
   backtracking */
#define N 4 
#include <stdbool.h> 
#include <stdio.h> 
  
/* A utility function to print solution */
void printSolution(int board[N][N]) 
{ 
    for (int i = 0; i < N; i++) { 
        for (int j = 0; j < N; j++) 
            printf(" %d ", board[i][j]); 
        printf("\n"); 
    } 
} 
  
/* A utility function to check if a queen can 
   be placed on board[row][col]. Note that this 
   function is called when "col" queens are 
   already placed in columns from 0 to col -1. 
   So we need to check only left side for 
   attacking queens */
bool isSafe(int board[N][N], int row, int col) 
{ 
    int i, j; 
  
    /* Check this row on left side */
    for (i = 0; i < col; i++) 
        if (board[row][i]) 
            return false; 
  
    /* Check upper diagonal on left side */
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) 
        if (board[i][j]) 
            return false; 
  
    /* Check lower diagonal on left side */
    for (i = row, j = col; j >= 0 && i < N; i++, j--) 
        if (board[i][j]) 
            return false; 
  
    return true; 
} 
  
/* A recursive utility function to solve N 
   Queen problem */
bool solveNQUtil(int board[N][N], int col) 
{ 
    /* base case: If all queens are placed 
      then return true */
    if (col >= N) 
        return true; 
  
    /* Consider this column and try placing 
       this queen in all rows one by one */
    for (int i = 0; i < N; i++) { 
        /* Check if the queen can be placed on 
          board[i][col] */
        if (isSafe(board, i, col)) { 
            /* Place this queen in board[i][col] */
            board[i][col] = 1; 
  
            /* recur to place rest of the queens */
            if (solveNQUtil(board, col + 1)) 
                return true; 
  
            /* If placing queen in board[i][col] 
               doesn't lead to a solution, then 
               remove queen from board[i][col] */
            board[i][col] = 0; // BACKTRACK 
        } 
    } 
  
    /* If the queen cannot be placed in any row in 
        this colum col  then return false */
    return false; 
} 
  
/* This function solves the N Queen problem using 
   Backtracking. It mainly uses solveNQUtil() to  
   solve the problem. It returns false if queens 
   cannot be placed, otherwise, return true and 
   prints placement of queens in the form of 1s. 
   Please note that there may be more than one 
   solutions, this function prints one  of the 
   feasible solutions.*/
bool solveNQ() 
{ 
    int board[N][N] = { { 0, 0, 0, 0 }, 
                        { 0, 0, 0, 0 }, 
                        { 0, 0, 0, 0 }, 
                        { 0, 0, 0, 0 } }; 
  
    if (solveNQUtil(board, 0) == false) { 
        printf("Solution does not exist"); 
        return false; 
    } 
  
    printSolution(board); 
    return true; 
} 
  
// driver program to test above function 
int main() 
{ 
    solveNQ(); 
    return 0; 
} 
`;

export const SumOfSubsetsCPP = `
// A recursive solution for subset sum problem 
#include <stdio.h> 

// Returns true if there is a subset 
// of set[] with sum equal to given sum 
bool isSubsetSum(int set[], int n, int sum) 
{ 
	// Base Cases 
	if (sum == 0) 
		return true; 
	if (n == 0 && sum != 0) 
		return false; 

	// If last element is greater than sum, 
	// then ignore it 
	if (set[n - 1] > sum) 
		return isSubsetSum(set, n - 1, sum); 

	/* else, check if sum can be obtained by any 
of the following: 
	(a) including the last element 
	(b) excluding the last element */
	return isSubsetSum(set, n - 1, sum) 
		|| isSubsetSum(set, n - 1, sum - set[n - 1]); 
} 

// Driver program to test above function 
int main() 
{ 
	int set[] = { 3, 34, 4, 12, 5, 2 }; 
	int sum = 9; 
	int n = sizeof(set) / sizeof(set[0]); 
	if (isSubsetSum(set, n, sum) == true) 
		printf("Found a subset with given sum"); 
	else
		printf("No subset with given sum"); 
	return 0; 
} 
`;

export const NFactorialCPP = `
// C++ program to find factorial of given number 
#include <iostream> 
using namespace std; 

// function to find factorial of given number 
unsigned int factorial(unsigned int n) 
{ 
	if (n == 0) 
		return 1; 
	return n * factorial(n - 1); 
} 

// Driver code 
int main() 
{ 
	int num = 5; 
	cout << "Factorial of "
		<< num << " is " << factorial(num) << endl; 
	return 0; 
} 

`;
export const SlidingWindowCPP = `
// O(n*k) solution for finding maximum sum of 
// a subarray of size k 
#include <bits/stdc++.h> 
using namespace std; 

// Returns maximum sum in a subarray of size k. 
int maxSum(int arr[], int n, int k) 
{ 
	// Initialize result 
	int max_sum = INT_MIN; 

	// Consider all blocks starting with i. 
	for (int i = 0; i < n - k + 1; i++) { 
		int current_sum = 0; 
		for (int j = 0; j < k; j++) 
			current_sum = current_sum + arr[i + j]; 

		// Update result if required. 
		max_sum = max(current_sum, max_sum); 
	} 

	return max_sum; 
} 

// Driver code 
int main() 
{ 
	int arr[] = { 1, 4, 2, 10, 2, 3, 1, 0, 20 }; 
	int k = 4; 
	int n = sizeof(arr) / sizeof(arr[0]); 
	cout << maxSum(arr, n, k); 
	return 0; 
} 
`;

export const QuickSelectCPP = `
// CPP program for implementation of QuickSelect 
#include <bits/stdc++.h> 
using namespace std; 

// Standard partition process of QuickSort(). 
// It considers the last element as pivot 
// and moves all smaller element to left of 
// it and greater elements to right 
int partition(int arr[], int l, int r) 
{ 
	int x = arr[r], i = l; 
	for (int j = l; j <= r - 1; j++) { 
		if (arr[j] <= x) { 
			swap(arr[i], arr[j]); 
			i++; 
		} 
	} 
	swap(arr[i], arr[r]); 
	return i; 
} 

// This function returns k'th smallest 
// element in arr[l..r] using QuickSort 
// based method. ASSUMPTION: ALL ELEMENTS 
// IN ARR[] ARE DISTINCT 
int kthSmallest(int arr[], int l, int r, int k) 
{ 
	// If k is smaller than number of 
	// elements in array 
	if (k > 0 && k <= r - l + 1) { 

		// Partition the array around last 
		// element and get position of pivot 
		// element in sorted array 
		int index = partition(arr, l, r); 

		// If position is same as k 
		if (index - l == k - 1) 
			return arr[index]; 

		// If position is more, recur 
		// for left subarray 
		if (index - l > k - 1) 
			return kthSmallest(arr, l, index - 1, k); 

		// Else recur for right subarray 
		return kthSmallest(arr, index + 1, r, 
							k - index + l - 1); 
	} 

	// If k is more than number of 
	// elements in array 
	return INT_MAX; 
} 

// Driver program to test above methods 
int main() 
{ 
	int arr[] = { 10, 4, 5, 8, 6, 11, 26 }; 
	int n = sizeof(arr) / sizeof(arr[0]); 
	int k = 3; 
	cout << "K-th smallest element is "
		<< kthSmallest(arr, 0, n - 1, k); 
	return 0; 
} 
`;

export const BubbleSortCPP = `
// C++ program for implementation of Bubble sort 
#include <bits/stdc++.h> 
using namespace std; 

void swap(int *xp, int *yp) 
{ 
	int temp = *xp; 
	*xp = *yp; 
	*yp = temp; 
} 

// A function to implement bubble sort 
void bubbleSort(int arr[], int n) 
{ 
	int i, j; 
	for (i = 0; i < n-1; i++)	 
	
	// Last i elements are already in place 
	for (j = 0; j < n-i-1; j++) 
		if (arr[j] > arr[j+1]) 
			swap(&arr[j], &arr[j+1]); 
} 

/* Function to print an array */
void printArray(int arr[], int size) 
{ 
	int i; 
	for (i = 0; i < size; i++) 
		cout << arr[i] << " "; 
	cout << endl; 
} 

// Driver code 
int main() 
{ 
	int arr[] = {64, 34, 25, 12, 22, 11, 90}; 
	int n = sizeof(arr)/sizeof(arr[0]); 
	bubbleSort(arr, n); 
	cout<<"Sorted array: \n"; 
	printArray(arr, n); 
	return 0; 
} 
`;

export const SelectionSortCPP = `
// C++ program for implementation of selection sort 
#include <bits/stdc++.h> 
using namespace std; 

void swap(int *xp, int *yp) 
{ 
	int temp = *xp; 
	*xp = *yp; 
	*yp = temp; 
} 

void selectionSort(int arr[], int n) 
{ 
	int i, j, min_idx; 

	// One by one move boundary of unsorted subarray 
	for (i = 0; i < n-1; i++) 
	{ 
		// Find the minimum element in unsorted array 
		min_idx = i; 
		for (j = i+1; j < n; j++) 
		if (arr[j] < arr[min_idx]) 
			min_idx = j; 

		// Swap the found minimum element with the first element 
		swap(&arr[min_idx], &arr[i]); 
	} 
} 

/* Function to print an array */
void printArray(int arr[], int size) 
{ 
	int i; 
	for (i=0; i < size; i++) 
		cout << arr[i] << " "; 
	cout << endl; 
} 

// Driver program to test above functions 
int main() 
{ 
	int arr[] = {64, 25, 12, 22, 11}; 
	int n = sizeof(arr)/sizeof(arr[0]); 
	selectionSort(arr, n); 
	cout << "Sorted array: \n"; 
	printArray(arr, n); 
	return 0; 
} 
`;

export const InsertionSortCPP = `
// C++ program for insertion sort 
#include <bits/stdc++.h> 
using namespace std; 

/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n) 
{ 
	int i, key, j; 
	for (i = 1; i < n; i++) 
	{ 
		key = arr[i]; 
		j = i - 1; 

		/* Move elements of arr[0..i-1], that are 
		greater than key, to one position ahead 
		of their current position */
		while (j >= 0 && arr[j] > key) 
		{ 
			arr[j + 1] = arr[j]; 
			j = j - 1; 
		} 
		arr[j + 1] = key; 
	} 
} 

// A utility function to print an array of size n 
void printArray(int arr[], int n) 
{ 
	int i; 
	for (i = 0; i < n; i++) 
		cout << arr[i] << " "; 
	cout << endl; 
} 

/* Driver code */
int main() 
{ 
	int arr[] = { 12, 11, 13, 5, 6 }; 
	int n = sizeof(arr) / sizeof(arr[0]); 

	insertionSort(arr, n); 
	printArray(arr, n); 

	return 0; 
} 
`;

export const MergeSortCPP = `
/* C program for Merge Sort */
#include <stdio.h> 
#include <stdlib.h> 

// Merges two subarrays of arr[]. 
// First subarray is arr[l..m] 
// Second subarray is arr[m+1..r] 
void merge(int arr[], int l, int m, int r) 
{ 
	int i, j, k; 
	int n1 = m - l + 1; 
	int n2 = r - m; 

	/* create temp arrays */
	int L[n1], R[n2]; 

	/* Copy data to temp arrays L[] and R[] */
	for (i = 0; i < n1; i++) 
		L[i] = arr[l + i]; 
	for (j = 0; j < n2; j++) 
		R[j] = arr[m + 1 + j]; 

	/* Merge the temp arrays back into arr[l..r]*/
	i = 0; // Initial index of first subarray 
	j = 0; // Initial index of second subarray 
	k = l; // Initial index of merged subarray 
	while (i < n1 && j < n2) { 
		if (L[i] <= R[j]) { 
			arr[k] = L[i]; 
			i++; 
		} 
		else { 
			arr[k] = R[j]; 
			j++; 
		} 
		k++; 
	} 

	/* Copy the remaining elements of L[], if there 
	are any */
	while (i < n1) { 
		arr[k] = L[i]; 
		i++; 
		k++; 
	} 

	/* Copy the remaining elements of R[], if there 
	are any */
	while (j < n2) { 
		arr[k] = R[j]; 
		j++; 
		k++; 
	} 
} 

/* l is for left index and r is right index of the 
sub-array of arr to be sorted */
void mergeSort(int arr[], int l, int r) 
{ 
	if (l < r) { 
		// Same as (l+r)/2, but avoids overflow for 
		// large l and h 
		int m = l + (r - l) / 2; 

		// Sort first and second halves 
		mergeSort(arr, l, m); 
		mergeSort(arr, m + 1, r); 

		merge(arr, l, m, r); 
	} 
} 

/* UTILITY FUNCTIONS */
/* Function to print an array */
void printArray(int A[], int size) 
{ 
	int i; 
	for (i = 0; i < size; i++) 
		printf("%d ", A[i]); 
	printf("\n"); 
} 

/* Driver program to test above functions */
int main() 
{ 
	int arr[] = { 12, 11, 13, 5, 6, 7 }; 
	int arr_size = sizeof(arr) / sizeof(arr[0]); 

	printf("Given array is \n"); 
	printArray(arr, arr_size); 

	mergeSort(arr, 0, arr_size - 1); 

	printf("\nSorted array is \n"); 
	printArray(arr, arr_size); 
	return 0; 
} 
`;

export const QuickSortCPP = `
/* C++ implementation of QuickSort */
#include <bits/stdc++.h> 
using namespace std; 

// A utility function to swap two elements 
void swap(int* a, int* b) 
{ 
	int t = *a; 
	*a = *b; 
	*b = t; 
} 

/* This function takes last element as pivot, places 
the pivot element at its correct position in sorted 
array, and places all smaller (smaller than pivot) 
to left of pivot and all greater elements to right 
of pivot */
int partition (int arr[], int low, int high) 
{ 
	int pivot = arr[high]; // pivot 
	int i = (low - 1); // Index of smaller element 

	for (int j = low; j <= high - 1; j++) 
	{ 
		// If current element is smaller than the pivot 
		if (arr[j] < pivot) 
		{ 
			i++; // increment index of smaller element 
			swap(&arr[i], &arr[j]); 
		} 
	} 
	swap(&arr[i + 1], &arr[high]); 
	return (i + 1); 
} 

/* The main function that implements QuickSort 
arr[] --> Array to be sorted, 
low --> Starting index, 
high --> Ending index */
void quickSort(int arr[], int low, int high) 
{ 
	if (low < high) 
	{ 
		/* pi is partitioning index, arr[p] is now 
		at right place */
		int pi = partition(arr, low, high); 

		// Separately sort elements before 
		// partition and after partition 
		quickSort(arr, low, pi - 1); 
		quickSort(arr, pi + 1, high); 
	} 
} 

/* Function to print an array */
void printArray(int arr[], int size) 
{ 
	int i; 
	for (i = 0; i < size; i++) 
		cout << arr[i] << " "; 
	cout << endl; 
} 

// Driver Code 
int main() 
{ 
	int arr[] = {10, 7, 8, 9, 1, 5}; 
	int n = sizeof(arr) / sizeof(arr[0]); 
	quickSort(arr, 0, n - 1); 
	cout << "Sorted array: \n"; 
	printArray(arr, n); 
	return 0; 
} 

`;
