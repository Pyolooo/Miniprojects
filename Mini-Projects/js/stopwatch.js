let time = 0;
let setIntervalID;
let lapSet = 1;

document.querySelector('.start-button').addEventListener('click', () => {
  startTime();
});

document.querySelector('.reset-button').addEventListener('click', () => {
  resetTimer();
})


const startTime = () => {
  const startBtn = document.querySelector('.start-button');
  const resetBtn = document.querySelector('.reset-button');
  const displayTime = document.querySelector('.display-time');

  if (startBtn.innerHTML === 'Start') {
    startBtn.innerHTML = 'Stop'
    resetBtn.innerHTML = 'Lap';
    startBtn.classList.add('stop-button');
    setIntervalID = setInterval(() => {
      time += 0.01;
      displayTime.innerHTML = `${time.toFixed(2)}`;
    }, 10);
  } else if (startBtn.innerHTML === 'Stop') {
    startBtn.innerHTML = 'Start';
    resetBtn.innerHTML = 'Reset';
    startBtn.classList.remove('stop-button');
    clearInterval(setIntervalID);
  }
};

const resetTimer = () => {
  const startBtn = document.querySelector('.start-button');
  const resetBtn = document.querySelector('.reset-button');
  const displayLapSet = document.querySelector('.display-lap-set');
  const displayTime = document.querySelector('.display-time');

  if (resetBtn.innerHTML === 'Lap') {
    displayLapSet.innerHTML += `<p class="lap-set"><span class="lap-label">Lap ${lapSet}</span> ${time.toFixed(2)}</p>`
    lapSet++;
  } else if (resetBtn.innerHTML === 'Reset') {
    time = 1;
    lapSet = 1
    displayLapSet.innerHTML = '';
    displayTime.innerHTML = '0.00';
  }

};