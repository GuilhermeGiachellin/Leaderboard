const generateHTML = () => {
  const containerUl = document.getElementById('games_ul');
  let counter = 0;
  containerUl.innerHTML = '';
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    counter += 1;
    li.innerHTML = `<li class="games_li"><p>game ${counter}</p></li>`;
    li.classList.add('tasks_li');
    if (counter % 2 !== 0) {
      li.classList.add('greyColor');
    }
    containerUl.appendChild(li);
  }
};

export default generateHTML;