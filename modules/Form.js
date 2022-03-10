import PostScore from './PostScore';

const GetUserInput = () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('name').value;
    const score = document.getElementById('score').value;

    if (user === '' || score === '') {
      alert('Please fill all fields');
      return;
    }

    PostScore(user, score);
  });
};

export default GetUserInput;