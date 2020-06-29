export const LinearSearchCPP = `
#include<bits/stdc++.h>
using namespace std;

vector<int> array = {45, 22, 68, 99, 100 ,120};
int target = 45;

int linearSearch(vector<int> array, int target){
    for(int i = 0; i < n; i++){
        if(array[i] == target) return i;
    }
    return -1;
}

int main(){
    cout << linearSearch(array, target) << endl;
    return 0;
}
`;

export const BinarySearchCPP = `
#include<bits/stdc++.h>
using namespace std;

vector<int> array = {1, 2, 3, 4, 5, 6, 7, 8};
int target = 7;

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
    cout << binarySearch(array, target) << endl;
    return 0;
}

`;

export const JumpSearchCPP = `
#include<bits/stdc++.h>
using namespace std;

vector<int> array = {1, 2, 3, 4, 5, 6, 7, 8};
int target = 7;

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
    cout << jumpSearch(array, target) << endl;
    return 0;
}

`;
