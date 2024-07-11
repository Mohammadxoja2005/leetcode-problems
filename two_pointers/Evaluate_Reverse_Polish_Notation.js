// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// ["2","1","+","3","*"] -> 9 -> ((2 + 1) * 3) = 9

function evalRPN(tokens) {
    const operands = ["+", "*", "/", "-"];
    const stack = [];

    for(const token of tokens) {
       if(!operands.includes(token)) {
           stack.push(token);
       }

       if(operands.includes(token)) {
           const lastOperator = Number(stack.pop());
           const firstOperator = Number(stack.pop());

           if(token === "+") {
               stack.push(firstOperator + lastOperator);
           }else if(token === "-") {
               stack.push(firstOperator - lastOperator);
           }else if(token === "*") {
               stack.push(lastOperator * firstOperator);
           }else if(token === "/") {
               stack.push(Math.trunc(firstOperator / lastOperator));
           }
       }
    }

    return stack.pop();
}

const result = evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);
console.log(result);