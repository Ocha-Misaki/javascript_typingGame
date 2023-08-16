const words = ['cow','absolute','passion']
const target = document.getElementById('target')
const result = document.getElementById('result')
let count = 0
let questionNum = 0
let timeOutID;
let seconds = ''
let startTime;

const countUp = () => {
  const elapsedTime = new Date(Date.now() - startTime)
  seconds = String(elapsedTime.getSeconds()).padStart(2, '0')
}

const startQuiz = () => {
  target.textContent = words[questionNum]
  document.addEventListener('keydown', e => {
    if(e.key === words[questionNum][count]){
      count++
      target.textContent = '_'.repeat(count) + words[questionNum].substring(count)
    } 
    if(count >= words[questionNum].length){
      count = 0
      questionNum++
      target.textContent = words[questionNum]
    }
    if(questionNum >= words.length){
      clearInterval(timeOutID)
      target.textContent = 'All Questions were done!'
      result.textContent = `Finished! You've answered in ${seconds} seconds`
    }
  })
}

target.textContent = 'Click to Start!'
document.addEventListener('click', () => {
  startTime =  Date.now()
  timeOutID = setInterval(() => {
    countUp()
  },10)
  startQuiz()
})


