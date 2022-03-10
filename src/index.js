import './style.css';
import GetUserInput from '../modules/Form.js';
import Refresh from '../modules/Refresh.js';
import DisplayScores from '../modules/DisplayScores.js';
import GetScore from '../modules/GetScore.js';

const init = async () => {
  const data = await GetScore();
  DisplayScores(data);
};

init();
GetUserInput();
Refresh();