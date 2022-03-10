const DisplayScores = (resultObj) => {
  const ul = document.querySelector('.score-list');

  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }

  const { result } = resultObj;
  result.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item.user;
    ul.appendChild(li);
  });
};

export default DisplayScores;