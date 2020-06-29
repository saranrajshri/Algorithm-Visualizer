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
