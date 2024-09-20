#include <iostream>
#include <stdio.h>

using namespace std;

int main() {

  int n;
  cout << "Enter Size";
  cin >> n;

  int A[n];
  A[0] = 2;

  for (int i = 0; i < n; i++) {
    printf("%d\n", A[i]);
  }

  // For each model
  for (int x : A) {
    cout << x << endl;
  }

  // cout << sizeof(A) << endl;
  // cout << A[8] << endl;
  // printf("%d\n", A[9]);

  return 0;
}
