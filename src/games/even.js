import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [String(number), correctAnswer];
};

const runEvenGame = () => runGame(description, generateRound);

export default runEvenGame;
