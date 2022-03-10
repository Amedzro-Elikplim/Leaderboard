import GetScore from './GetScore.js';

const Refresh = () => {
  const button = document.getElementById('refresh');
  button.addEventListener('click', () => {
    GetScore();
  });
};

export default Refresh;