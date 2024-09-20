#include <iostream>
#include <ostream>
using namespace std;

int main() {
  int a = 10;
  int &r = a;
  // int b = 25;
  // r = b; // we can do that but it also changes the a = b ;
  int b = 30;
  r = b;
  cout << a<< endl<< b<< endl<< r<<endl;

  r = 23;

  cout << a<< endl<< b<< endl<< r<<endl;

  return 0;
}
