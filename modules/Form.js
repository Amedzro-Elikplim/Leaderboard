import PostScore from './PostScore.js';

const GetUserInput = () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = document.getElementById('name').value;
    const score = document.getElementById('score').value;

    if (user === '' || score === '') {
      alert('Please fill all fields');
      return;
    }

    const response = await PostScore(user, score);
    if (response) {
      console.log('score saved successfully');
    }
  });
};

export default GetUserInput;