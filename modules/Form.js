import PostScore from './PostScore.js';

const GetUserInput = () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userData = document.getElementById('name');
    const scoreData = document.getElementById('score');

    const user = userData.value;
    const score = scoreData.value;

    if (user === '' || score === '') {
      alert('Please fill all fields');
      return;
    }

    const response = await PostScore(user, score);
    if (response) {
      alert('score saved successfully');
    }
    userData.value = '';
    scoreData.value = '';
  });
};

export default GetUserInput;