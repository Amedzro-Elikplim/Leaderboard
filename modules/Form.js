const GetUserInput = () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;

    if (name === '' || score === '') {
      alert('Please fill all fields');
      return;
    }

    console.log(name, score);
  });
};

export default GetUserInput;