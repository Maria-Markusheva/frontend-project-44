import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const start = getRandomNumber(1, 10); // начальное число
  const step = getRandomNumber(1, 5); // шаг прогрессии
  const length = 10;

  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => runGame(description, generateRound);

export default runProgressionGame;
