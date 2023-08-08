let n = prompt("Reqem daxil edin: ");
function myFunc(n) {
    if (n <= 0) {
      return ("musbet reqem daxil edin");
    } else if (n == 1) {
      return 0;
    } else if (n == 2) {
      return 1;
    } else {
      let a = 0
       let b = 1;
      for (let i = 2; i < n; i++) {
        let sum = b;
        b = a + b;
        a = sum;
      }
      return b;
    }
  }
  
  let result = myFunc(n);
  console.log(`Fibonacci sirasinin ${n} -ci elementi: ${result}`);