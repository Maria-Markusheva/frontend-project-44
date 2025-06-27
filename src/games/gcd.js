import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

runGame(description, generateRound);
