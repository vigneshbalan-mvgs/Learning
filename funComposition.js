var compose = fucntion(functions){
  retrun function (x){
    for(const fn of  function.reverse()){
      x = fn(x);
    }
    return x;
  }
}
