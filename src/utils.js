export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isEven = (number) => number % 2 === 0;

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

export const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};
