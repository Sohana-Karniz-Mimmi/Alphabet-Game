// home screen
function playBtn(){
    //     // Hidden Home Screen
    //    const homeScreen = document.getElementById('home');
    //    homeScreen.classList.add('hidden');
       
    //     //Add Game Screen to Home 
    //     const gameScreen = document.getElementById('game-screen');
    //     gameScreen.classList.remove('hidden');
    
    
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