const person = {
  name: "mvgs",
}

function printName() {
  console.log(this.name);
}

printName();
printName.apply(person);
