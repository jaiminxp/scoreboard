let homeScore = 0;
let guestScore = 0;

const homeScoreEl = document.querySelector('#home-team .score');
const guestScoreEl = document.querySelector('#guest-team .score');

const homeScoreBtns = document.querySelectorAll('#home-team .score-btn-container > button');
const guestScoreBtns = document.querySelectorAll('#guest-team .score-btn-container > button');

homeScoreBtns.forEach(btn => { 
    btn.onclick = () => {
        const addScore = parseInt(btn.dataset.score);
        homeScore += addScore;

        homeScoreEl.textContent = homeScore;

        if (homeScore > guestScore) {
            homeScoreEl.classList.add('score-winning');   
        } else if (homeScore === guestScore) {
            homeScoreEl.classList.remove('score-winning');   
            guestScoreEl.classList.remove('score-winning');   
        }
    }
})

guestScoreBtns.forEach((btn) => {
  btn.onclick = () => {
    const addScore = parseInt(btn.dataset.score);
    guestScore += addScore;

      guestScoreEl.textContent = guestScore;
      
      if (guestScore > homeScore) {
        guestScoreEl.classList.add('score-winning');
        homeScoreEl.classList.remove('score-winning');
      } else if (homeScore === guestScore) {
        homeScoreEl.classList.remove('score-winning');
        guestScoreEl.classList.remove('score-winning');
      }
  };
});

