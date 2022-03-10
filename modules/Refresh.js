import GetScore from './GetScore.js';
import DisplayScores from './DisplayScores.js';

const Refresh = () => {
  const button = document.getElementById('refresh');
  button.addEventListener('click', async () => {
    const result = await GetScore();
    DisplayScores(result);
  });
};

export default Refresh;