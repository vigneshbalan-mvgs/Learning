#include <cstdlib>
#include <iostream>
#include <stdio.h>
#include <stdlib.h>

using namespace std;

struct Rectangle {
   int length; //4byte
  int breadth; //4byte
};

int main(){
 struct Rectangle *p; // C++
 //p=(struct Rectangle *)malloc(sizeof(struct Rectangle)); // C code
 p = new Rectangle;

 p->length=15;
 p->breadth=7;

 cout<<p->length<<endl;
 cout<<p->breadth<<endl;

 printf(p->breadth);




    return 0;
}
