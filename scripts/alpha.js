
const keyboard = document.addEventListener('keyup', function(event){
    const keyValue = event.key;

    const currentAlphabet = document.getElementById('current-alphabet')
    const currentAlphabetText = currentAlphabet.innerText
    const currentAlphabetLower = currentAlphabetText.toLowerCase();

    //Game Over
    const game = getScoreTextToNumber('life');
    if(game == 0){


        hiddenElementId('game-screen')
        showElementId('score-screen');
      const gameScore = getScoreTextToNumber('live-score')
      const scoreText = document.getElementById('score');
        scoreText.innerText = gameScore;
        removeBackgroundColor(currentAlphabetLower);
     
    }

    
    if(keyValue === currentAlphabetLower){
        // plus scores
       const scoreId = getScoreTextToNumber('live-score');
        let updatedScore = scoreId + 1;
       getScore('live-score', updatedScore);

        removeBackgroundColor(currentAlphabetLower);
        continueGame()
    }
    else{
        const scoreId = getScoreTextToNumber('life');
        let updatedScore = scoreId - 1;
       getScore('life', updatedScore);
    }

    if(keyValue == 'Escape'){
        hiddenElementId('game-screen')
        showElementId('score-screen');
        
      const gameScore = getScoreTextToNumber('live-score')
      const scoreText = document.getElementById('score');
        scoreText.innerText = gameScore;
        removeBackgroundColor(currentAlphabetLower);
    };

})


// home screen
function playBtn(){

    /**********Sort hand method */
    hiddenElementId('home')
    showElementId('game-screen');
    continueGame()
    
}


// Game Screen
function continueGame(){
 const randomAlphabet = getRandomAlphabet();
 const currentAlphabet = document.getElementById('current-alphabet');
 currentAlphabet.innerText = randomAlphabet;
 setBackgroundColor(randomAlphabet);

}


// score screen
function scoreScreen(){
    hiddenElementId('score-screen')
    showElementId('game-screen');

    // Reset Game
    getScore('live-score', 0)
    getScore('life', 4)
    continueGame()
}