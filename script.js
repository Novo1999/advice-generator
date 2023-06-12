const adviceNum = document.querySelector('.advice-number');
const adviceBox = document.querySelector('.advice');
const btn = document.querySelector('.dice-container');
const insertHtml = document.querySelector('.inner-html');

const getAdvice = function (id, advice) {
  const html = `<div>
    <h4>advice #${id}</h4>
    <h1 class="advice">
      "${advice}"
    </h1>
    </div>`;
  insertHtml.innerHTML = html;
  console.log(html);
};

const getAdviceData = async function () {
  const request = await fetch('https://api.adviceslip.com/advice');
  const data = await request.json();
  const id = data.slip.id;
  const advice = data.slip.advice;
  console.log(advice);
  getAdvice(id, advice);
};

getAdviceData();
