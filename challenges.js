
const add = (a, b, sum) => {
  setTimeout(() => {
    sum(a + b);
  }, 2000);
};
add(1, 4, (sum) => {
  console.log(sum);
});
