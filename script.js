const answer = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitly',
  'You may rely on it',
  'As I see it yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Ask agin later',
  'Reply hazy, try again',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My source says no',
  'Outlook not so good',
  'Very doubtful',
];
// console.log(answer);
const text = document.querySelector('.text');
const ans = document.querySelector('.ans');
const shakeBtn = document.querySelector('.shake-btn');
const another = document.querySelector('.another');

let randomAns = function () {
  random = Math.trunc(Math.random() * answer.length);
  random = answer[random];
};
// for (let i = 0; i < answer.length; i++) {
//   random = answer[i[random]];
// }
randomAns();
console.log(randomAns(random));
const randomText = function () {
  random;
  ans.innerHTML = random;
};
shakeBtn.addEventListener('click', function () {
  //   display the random answer
  if (!text.value) {
    text.value = '🙏 Please enter your question';
    ans.innerHTML = 8;
    ans.classList.add('shake');
  } else if (text.value === '🙏 Please enter your question') {
    ans.innerHTML = 8;
    ans.classList.add('shake');
  } else if (ans.innerHTML === random) {
    text.value = '';
  } else {
    randomText();
    ans.classList.remove('shake');
  }
});
another.addEventListener('click', function () {
  randomAns();
  text.value = '';
  ans.innerHTML = 8;
  ans.classList.add('shake');
});
