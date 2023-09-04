/* Non recursion */

function fibs(n) {
  let array = [];

  let a = 0;
  let b = 1;
  let c = a + b;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      array.push(a);
    } else {
      array.push(c);
      b = a;
      a = c;
      c = b + a;
    }
  }
  console.log(array);
}

// or

const fibsIterative = (n) => {
  const result = [0, 1];

  while (result.length < n) {
    result.push(result[result.length - 2] + result[result.length - 1]);
  }

  return result;
};

/* Recursive version */

function fibsRec(n, a = [0,1]) {
  if (a.length >= n) return a;

  return fibsRec(n, [...a, a[a.length - 1] + a[a.length - 2]]);
}
