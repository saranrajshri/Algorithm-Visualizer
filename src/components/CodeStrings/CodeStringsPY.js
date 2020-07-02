export const LinearSearchPY = `
# Python3 code to linearly search x in arr[].  
# If x is present then return its location, 
# otherwise return -1 
  
def search(arr, n, x): 
  
    for i in range (0, n): 
        if (arr[i] == x): 
            return i; 
    return -1; 
  
# Driver Code 
arr = [ 2, 3, 4, 10, 40 ]; 
x = 10; 
n = len(arr); 
result = search(arr, n, x) 
if(result == -1): 
    print("Element is not present in array") 
else: 
    print("Element is present at index", result); 
`;

export const BinarySearchPY = `
# Python3 code to implement iterative Binary  
# Search. 
  
# It returns location of x in given array arr  
# if present, else returns -1 
def binarySearch(arr, l, r, x): 
  
    while l <= r: 
  
        mid = l + (r - l) // 2; 
          
        # Check if x is present at mid 
        if arr[mid] == x: 
            return mid 
  
        # If x is greater, ignore left half 
        elif arr[mid] < x: 
            l = mid + 1
  
        # If x is smaller, ignore right half 
        else: 
            r = mid - 1
      
    # If we reach here, then the element 
    # was not present 
    return -1
  
# Driver Code 
arr = [ 2, 3, 4, 10, 40 ] 
x = 10
  
# Function call 
result = binarySearch(arr, 0, len(arr)-1, x) 
  
if result != -1: 
    print ("Element is present at index % d" % result) 
else: 
    print ("Element is not present in array") 
`;

export const JumpSearchPY = `
# Python3 code to implement Jump Search 
import math 
  
def jumpSearch( arr , x , n ): 
      
    # Finding block size to be jumped 
    step = math.sqrt(n) 
      
    # Finding the block where element is 
    # present (if it is present) 
    prev = 0
    while arr[int(min(step, n)-1)] < x: 
        prev = step 
        step += math.sqrt(n) 
        if prev >= n: 
            return -1
      
    # Doing a linear search for x in  
    # block beginning with prev. 
    while arr[int(prev)] < x: 
        prev += 1
          
        # If we reached next block or end  
        # of array, element is not present. 
        if prev == min(step, n): 
            return -1
      
    # If element is found 
    if arr[int(prev)] == x: 
        return prev 
      
    return -1
  
# Driver code to test function 
arr = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 
    34, 55, 89, 144, 233, 377, 610 ] 
x = 55
n = len(arr) 
  
# Find the index of 'x' using Jump Search 
index = jumpSearch(arr, x, n) 
  
# Print the index where 'x' is located 
print("Number" , x, "is at index" ,"%.0f"%index) 
`;

export const FibonacciPY = `
FibArray = [0,1] 
  
def fibonacci(n): 
    if n < 0: 
        print("Incorrect input") 
    elif n <= len(FibArray): 
        return FibArray[n-1] 
    else: 
        temp_fib = fibonacci(n-1) + fibonacci(n-2) 
        FibArray.append(temp_fib) 
        return temp_fib 
  
# Driver Program 
  
print(fibonacci(9)) 
`;

export const NQueensPY = `
# Python3 program to solve N Queen 
# Problem using backtracking 
global N 
N = 4

def printSolution(board): 
	for i in range(N): 
		for j in range(N): 
			print (board[i][j], end = " ") 
		print() 

# A utility function to check if a queen can 
# be placed on board[row][col]. Note that this 
# function is called when "col" queens are 
# already placed in columns from 0 to col -1. 
# So we need to check only left side for 
# attacking queens 
def isSafe(board, row, col): 

	# Check this row on left side 
	for i in range(col): 
		if board[row][i] == 1: 
			return False

	# Check upper diagonal on left side 
	for i, j in zip(range(row, -1, -1), 
					range(col, -1, -1)): 
		if board[i][j] == 1: 
			return False

	# Check lower diagonal on left side 
	for i, j in zip(range(row, N, 1), 
					range(col, -1, -1)): 
		if board[i][j] == 1: 
			return False

	return True

def solveNQUtil(board, col): 
	
	# base case: If all queens are placed 
	# then return true 
	if col >= N: 
		return True

	# Consider this column and try placing 
	# this queen in all rows one by one 
	for i in range(N): 

		if isSafe(board, i, col): 
			
			# Place this queen in board[i][col] 
			board[i][col] = 1

			# recur to place rest of the queens 
			if solveNQUtil(board, col + 1) == True: 
				return True

			# If placing queen in board[i][col 
			# doesn't lead to a solution, then 
			# queen from board[i][col] 
			board[i][col] = 0

	# if the queen can not be placed in any row in 
	# this colum col then return false 
	return False

# This function solves the N Queen problem using 
# Backtracking. It mainly uses solveNQUtil() to 
# solve the problem. It returns false if queens 
# cannot be placed, otherwise return true and 
# placement of queens in the form of 1s. 
# note that there may be more than one 
# solutions, this function prints one of the 
# feasible solutions. 
def solveNQ(): 
	board = [ [0, 0, 0, 0], 
			[0, 0, 0, 0], 
			[0, 0, 0, 0], 
			[0, 0, 0, 0] ] 

	if solveNQUtil(board, 0) == False: 
		print ("Solution does not exist") 
		return False

	printSolution(board) 
	return True

# Driver Code 
solveNQ() 

# This code is contributed by Divyanshu Mehta 

`;

export const SumOfSubSstsPY = `
# A recursive solution for subset sum 
# problem 

# Returns true if there is a subset 
# of set[] with sun equal to given sum 
def isSubsetSum(set, n, sum) : 
	
	# Base Cases 
	if (sum == 0) : 
		return True
	if (n == 0 and sum != 0) : 
		return False

	# If last element is greater than 
	# sum, then ignore it 
	if (set[n - 1] > sum) : 
		return isSubsetSum(set, n - 1, sum); 

	# else, check if sum can be obtained 
	# by any of the following 
	# (a) including the last element 
	# (b) excluding the last element 
	return isSubsetSum( 
set, n-1, sum) or isSubsetSum( 
set, n-1, sum-set[n-1]) 
	
	
# Driver program to test above function 
set = [3, 34, 4, 12, 5, 2] 
sum = 9
n = len(set) 
if (isSubsetSum(set, n, sum) == True) : 
	print("Found a subset with given sum") 
else : 
	print("No subset with given sum") 
	
# This code is contributed by Nikita Tiwari. 
`;

export const NFactorialPY = `
# Python 3 program to find 
# factorial of given number 

# Function to find factorial of given number 
def factorial(n): 
	
	if n == 0: 
		return 1
	
	return n * factorial(n-1) 

# Driver Code 
num = 5; 
print("Factorial of", num, "is", 
factorial(num)) 
`;
export const SlidingWindowPY = `
# O(n * k) solution for finding 
# maximum sum of a subarray of size k 
import sys 
INT_MIN = -sys.maxsize -1

# Returns maximum sum in a 
# subarray of size k. 
def maxSum(arr, n, k): 
	
	# Initialize result 
	max_sum = INT_MIN 

	# Consider all blocks 
	# starting with i. 
	for i in range(n - k + 1): 
		current_sum = 0
		for j in range(k): 
			current_sum = current_sum + arr[i + j] 

		# Update result if required. 
		max_sum = max(current_sum, max_sum ) 

	return max_sum 

# Driver code 
arr = [1, 4, 2, 10, 2, 
		3, 1, 0, 20] 
k = 4
n = len(arr) 
print(maxSum(arr, n, k)) 
`;

export const QuickSelectPY = `
# Python3 program of Quick Select 

# Standard partition process of QuickSort(). 
# It considers the last element as pivot 
# and moves all smaller element to left of 
# it and greater elements to right 
def partition(arr, l, r): 
	
	x = arr[r] 
	i = l 
	for j in range(l, r): 
		
		if arr[j] <= x: 
			arr[i], arr[j] = arr[j], arr[i] 
			i += 1
			
	arr[i], arr[r] = arr[r], arr[i] 
	return i 

# finds the kth position (of the sorted array) 
# in a given unsorted array i.e this function 
# can be used to find both kth largest and 
# kth smallest element in the array. 
# ASSUMPTION: all elements in arr[] are distinct 
def kthSmallest(arr, l, r, k): 

	# if k is smaller than number of 
	# elements in array 
	if (k > 0 and k <= r - l + 1): 

		# Partition the array around last 
		# element and get position of pivot 
		# element in sorted array 
		index = partition(arr, l, r) 

		# if position is same as k 
		if (index - l == k - 1): 
			return arr[index] 

		# If position is more, recur 
		# for left subarray 
		if (index - l > k - 1): 
			return kthSmallest(arr, l, index - 1, k) 

		# Else recur for right subarray 
		return kthSmallest(arr, index + 1, r, 
							k - index + l - 1) 
	return INT_MAX 

# Driver Code 
arr = [ 10, 4, 5, 8, 6, 11, 26 ] 
n = len(arr) 
k = 3
print("K-th smallest element is ", end = "") 
print(kthSmallest(arr, 0, n - 1, k)) 

`;

export const BubbleSortPY = `
# Python program for implementation of Bubble Sort 

def bubbleSort(arr): 
	n = len(arr) 

	# Traverse through all array elements 
	for i in range(n): 

		# Last i elements are already in place 
		for j in range(0, n-i-1): 

			# traverse the array from 0 to n-i-1 
			# Swap if the element found is greater 
			# than the next element 
			if arr[j] > arr[j+1] : 
				arr[j], arr[j+1] = arr[j+1], arr[j] 

# Driver code to test above 
arr = [64, 34, 25, 12, 22, 11, 90] 

bubbleSort(arr) 

print ("Sorted array is:") 
for i in range(len(arr)): 
	print ("%d" %arr[i]), 

`;

export const SelectionSortPY = `
# Python program for implementation of Selection 
# Sort 
import sys 
A = [64, 25, 12, 22, 11] 

# Traverse through all array elements 
for i in range(len(A)): 
	
	# Find the minimum element in remaining 
	# unsorted array 
	min_idx = i 
	for j in range(i+1, len(A)): 
		if A[min_idx] > A[j]: 
			min_idx = j 
			
	# Swap the found minimum element with 
	# the first element		 
	A[i], A[min_idx] = A[min_idx], A[i] 

# Driver code to test above 
print ("Sorted array") 
for i in range(len(A)): 
	print("%d" %A[i]), 
`;

export const InsertionSortPY = `
# Python program for implementation of Insertion Sort 

# Function to do insertion sort 
def insertionSort(arr): 

	# Traverse through 1 to len(arr) 
	for i in range(1, len(arr)): 

		key = arr[i] 

		# Move elements of arr[0..i-1], that are 
		# greater than key, to one position ahead 
		# of their current position 
		j = i-1
		while j >= 0 and key < arr[j] : 
				arr[j + 1] = arr[j] 
				j -= 1
		arr[j + 1] = key 


# Driver code to test above 
arr = [12, 11, 13, 5, 6] 
insertionSort(arr) 
for i in range(len(arr)): 
	print ("% d" % arr[i]) 

`;
