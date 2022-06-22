// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
funtion functionWithTwoParams(x,y){
  console.log("X = ", x);
  console.log("Y = ", y);
  return x + y;
}
// invoke the function and pass in two numbers
functionWithTwoParams(5, 8);
// invoke the function and pass in more than two numbers
funstionWithTwoParams(1, 2, 3, 4);
// invoke the function and pass in only one number
functionWithParams(9);
// change the function to set default values for the parameters
function functionWithTwoParamsDef(x = 5, y = 10){
  console.log()
  console.log
}
// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithTwoParams(x, y, ...z){
  console.log("3rd X = ", x)
console.log("2nd Y = ", y)
  console.log("this is the rest operator", z)
  return console.log("Adding it all...", x + y + z)
}
// again, invoke the function and pass in more than two numbers
funxtionWithTwoParamsReast(1, 2, 3, 4, 7, 10);
