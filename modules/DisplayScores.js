const DisplayScores = (resultObj) => {
  const ul = document.querySelector('.score-list');

  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }

  const { result } = resultObj;

  result.sort((a, b) => b.score - a.score);

  result.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.user}: ${item.score}`;
    ul.appendChild(li);
  });
};

export default DisplayScores;