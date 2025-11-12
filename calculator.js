class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  substract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }

    return a / b;
  }
}

module.exports = Calculator;
