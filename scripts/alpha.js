// home screen
function playBtn(){
    // Hidden Home Screen
   const homeScreen = document.getElementById('home');
   homeScreen.classList.add('hidden');
   
    //Add Game Screen to Home 
    const gameScreen = document.getElementById('game-screen');
    gameScreen.classList.remove('hidden');
}


// Game Screen