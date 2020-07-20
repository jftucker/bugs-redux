function add(a) {
  return function (b) {
    console.log(a);
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;

add(1)(5);
