import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';



const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) { 
    return false;
    }
}
 return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [String(number), correctAnswer];
};

const runPrimeGame = () => runGame(description, generateRound);

export default runPrimeGame;