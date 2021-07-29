import setScore from './displayHtml';

const form = document.querySelector('form');
const refreshBtn = document.getElementById('refresh_btn');

const postAdd = async (e) => {
  e.preventDefault();
  const infoInput = document.querySelectorAll('input');
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3tLunP6RrXr3HC3MxUTg/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: infoInput[0].value,
      score: Number(infoInput[1].value),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  infoInput[0].value = '';
  infoInput[1].value = '';
  return response.json();
};

const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3tLunP6RrXr3HC3MxUTg/scores/');
  return response.json();
};

getScore().then((response) => { setScore(response); });

form.addEventListener('submit', postAdd);
refreshBtn.addEventListener('click', () => { window.location.reload(); });

export default getScore;
