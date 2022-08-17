function receivesAFunction(a) {
  return a();
}
function returnsANamedFunction() {
  return receivesAFunction;
}
function returnsAnAnonymousFunction() {
  return function () {};
}
