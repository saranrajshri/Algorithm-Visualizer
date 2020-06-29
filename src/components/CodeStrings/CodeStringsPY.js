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
