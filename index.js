// Function Declaration for 'saturdayFun'
// This defines a function using a function declaration method, which benefits from hoisting.
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function Expression for 'mondayWork'
  // This function is assigned to a variable as a function expression. Unlike function declarations, function expressions are not hoisted.
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // IIFE (Immediately Invoked Function Expression)
  // This IIFE example demonstrates how to define and invoke a function immediately. It's useful for creating a private scope.
  (function() {
    console.log("IIFE is executed immediately upon definition.");
  })();
  
  // Higher-Order Function: 'wrapAdjective'
  // This function returns another function, illustrating closure, function-level scope, and higher-order function concepts.
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  