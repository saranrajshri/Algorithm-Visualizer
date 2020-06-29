export const LinearSearchCode = `
#include<bits/stdc++.h>
using namespace std;

vector<int> array = {45, 22, 68, 99, 100 ,120}
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
