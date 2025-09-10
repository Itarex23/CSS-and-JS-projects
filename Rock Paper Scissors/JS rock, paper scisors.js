let scores = JSON.parse(localStorage.getItem('scores')) || {win: 0, losses: 0, tie: 0}         // we can also shorten the syntax below to this using a default operator ===> a default operator checks if one value is true and then runs it. if the JSON.parse is false or falsy, run the right hand

            /* if (scores === null){
                scores = {win: 0, losses: 0, tie: 0}
            }; this intorduces a default value for scores, incase scores appear as null from the removeItem function. 
             we can aslso use the falsy values here as shortcuts. if !scores (which means not score, i.e is null)
            
            if (!scores ){
                scores = {win: 0, losses: 0, tie: 0}} */

                updateScore(); //used DOM to call to save element and then saved in a function
           
            function playGame(playMove){
                 let result = '';

                if(playMove === 'scissors'){
                    
                    if (compMove === 'rock' ){
                            result = 'You Lose'
                        }

                        else if (compMove === 'paper'){
                            result = 'You Win'
                        }

                        else if (compMove === 'scissors') {
                            result = 'Tie'
                        };

                }

                else if(playMove === 'paper'){
                       
                    if (compMove === 'rock' ){
                        result = 'You Win'
                    }
                    else if (compMove === 'paper'){
                        result = 'Tie'
                    }
                    else if (compMove === 'scissors') {
                        result = 'You Lose'
                    };


                }
                
                else if(playMove === 'rock'){
                    
                    
                        if (compMove === 'rock' ){
                            result = 'Tie'
                        }
                        else if (compMove === 'paper'){
                            result = 'You Lose'
                        }
                        else if (compMove === 'scissors') {
                            result = 'You Win'
                        };

                    
                }
                
                if(result === 'You Win'){
                    scores.win += 1
                }
                else if(result === 'You Lose'){
                    scores.losses += 1
                }
                else if (result === 'Tie'){
                    scores.tie += 1
                };


                updateScore();

                document.querySelector('.js-result')
                    .innerHTML = result;
                
                document.querySelector('.js-move')
                    .innerHTML = `You 
                        <img src="img/${playMove}-emoji.png" class="move-icon">
                        <img src="img/${compMove}-emoji.png" class="move-icon">
                        Computer`



               localStorage.setItem('scores', JSON.stringify(scores));

            
            }
            
            function updateScore(){
                  document.querySelector('.js-score')
                     .innerHTML = `Wins: ${scores.win}, Losses: ${scores.losses}, Ties: ${scores.tie}` 
            }

              let compMove = ''; // using global variable  
            function pickComputerMove(){
                
                const randomNumber = Math.random();     // this code helps the computer to generate random numnbers

                if ( randomNumber >= 0 && randomNumber < 1 / 3) {
                    compMove = 'rock'}           // using && cos its checks both sides to be true

                else if ( randomNumber >= 1/3 && randomNumber < 2 / 3) {
                    compMove = 'paper'
                }

                else if ( randomNumber >= 2/3 && randomNumber <= 1){
                    compMove = 'scissors'
                };

           
            }
        
