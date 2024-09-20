#include <iostream>
#include <stdio.h>
using namespace std;

struct Reactange {
   int length; //4byte
  int breadth; //4byte
  char x; //1 byte no its also 4 byte use only 1 byte space will be 4 byte
  //its called padding
};

int main() {
  // struct Reactange r1 = {10, 5};
  int *p1;
  char *p2;
  float *p3;
  double *p4;
  struct Reactange *p5;

  cout<<sizeof(p1)<<endl;// 8 bytes
  cout<<sizeof(p2)<<endl;// 8 bytes
  cout<<sizeof(p3)<<endl;// 8 bytes
  cout<<sizeof(p4)<<endl;// 8 bytes
  cout<<sizeof(p5)<<endl;// 8 bytes


  // r1.length=15;
  // r1.breadth=7;


  // cout<<r1.length<<endl;
  // cout<<r1.breadth<<endl;
  return 0;
}
