const Calculator = require("./calculator");

describe("Calculator class", () => {
  it("should add two numbers", () => {
    const calculator = new Calculator();
    const result = calculator.add(2, 3);

    expect(result).toBe(5);
  });

  it("should substract two numbers", () => {
    const calculator = new Calculator();
    const result = calculator.substract(6, 3);

    expect(result).toBe(3);
  });

  it("should multiply two numbers", () => {
    const calculator = new Calculator();
    const result = calculator.multiply(6, 4);

    expect(result).toBe(24);
  });

  it("should divide two numbers", () => {
    const calculator = new Calculator();
    const result = calculator.divide(6, 3);

    expect(result).toBe(2);
  });

  it("should throw an error", () => {
    const calculator = new Calculator();

    expect(() => calculator.divide(6, 0)).toThrow();
  });
});
