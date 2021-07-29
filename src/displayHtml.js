const setScore = (scoreList) => {
  const containerUl = document.getElementById('games_ul');
  containerUl.innerHTML = '';
  let counter = 0;
  scoreList.result.forEach((element) => {
    const li = document.createElement('li');
    counter += 1;
    li.innerHTML = `<li class="games_li"><div><p>PLAYER: ${element.user}</p></div><div></div><p>SCORE: ${element.score}</p></li>`;
    li.classList.add('tasks_li');
    if (counter % 2 !== 0) {
      li.classList.add('greyColor');
    }
    containerUl.appendChild(li);
  });
};

export default setScore;