#include <algorithm>
#include <cstdlib>
#include <iostream>
#include <stdio.h>

using namespace std;

int main(){
    // int a= 10;
    // int *p;
    // p=&a;

    // cout << a << endl;
    // printf("using point %d %d %d",*p, p , &a) ;

    // int A[5] = {2,4,6,8,10};

    int *p;
    // p=(int *)malloc(5*sizeof(int)); //C Allocating Memory
    p = new int[5]; // C++ allocating memory
    p[0]=10;p[1]=8;p[2]=6;p[3]=4;p[4]=2;

    for (int i=0 ; i<5; i++) {
        cout << &p[i]<<endl;
        cout << p[i]<<endl;
    }
    // deallocating memory
    //delete [] p;//c
    //free(p); //c++



    return 0;
}
