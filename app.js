

//DOM Grabbs
const gridcontainer = document.querySelector(".gridcontainer");
const buttons = document.querySelector(".buttonDiv");
const resetBtn = document.getElementById("resetGame");
let currentArray = [0,1,2,3,4,5,6,7,8];


const clearArray = () => {return currentArray = [0,1,2,3,4,5,6,7,8];}


//Display Controller , initalised ready for click events
const DisplayController = (function () {
    
   displayStatus = false;

    const ConstructDivs = () => {buttons.addEventListener("click", (e) => {
        if(e.target.id === "startGame" && this.displayStatus === false){
            for (let i = 0; i < 9; i++){let item = document.createElement("DIV");
                item.setAttribute("index", `${i}`);
                    item.classList.add("cell");
                        gridcontainer.appendChild(item);
                            displayStatus = true;
                    }
                }
            }
        );
    };

    const BoardReset =() => {buttons.addEventListener("click", (e) => {
            if(e.target.id === "resetGame") {
                const cells = Array.from(document.querySelectorAll(".cell"))
                    cells.forEach(cell => cell.innerText = ``)
                };
            }
        ) 
    };

    const manualReset = function () {
        cells = document.querySelectorAll(".cell");
        cells.forEach(cell => cell.innerText ="");
    };


        //modular calls
        BoardReset();
        ConstructDivs();
        return {manualReset}
    });

    //instantiate gameBoard
const display= DisplayController();


// Player Factory called during gameBoard() function, two players currently with pre-set values.
const player = (name, marker) => {
    
    this.name = name;
    this.marker = marker;
    const getName = () => name;
        return {name, marker}
};



//GameBoard controller, this controls the game logic and conditional elements.
const gameboard = (() => {

    this.playersGo = "player1";
    const player1 = player("connor", "x");
    const player2 = player("Sona","o");


    const togglePlayer = (() => {if (this.playersGo ==="player1"){
            return playersGo = "player2"
                } else if(playersGo === "player2"){
                    return playersGo = "player1"
                }}
    );
    
    const Selection = (() => {gridcontainer.addEventListener("click", (e) => {
        if (playersGo === "player1"){
            currentArray[e.target.getAttribute("index")] = player1.marker;
                e.target.innerText = (player1.marker)
                    winnerCheck(currentArray);
                            return togglePlayer()

        } else if (playersGo ="player2"){
            currentArray[e.target.getAttribute("index")] = player2.marker;
               e.target.innerText = (player2.marker)
                    winnerCheck(currentArray);
                            return togglePlayer();
                        }
                    }
                )
            }
    )();

    // currently is comparing empty cells - 
    const winnerCheck = ((array) => {
            if (array[0] === array[3] && array[3] === array[6]||
                array[0] === array[1] && array[1] === array[2]||
                array[0] === array[4] && array[4] === array[8]||
                array[1] === array[4] && array[4] === array[7]||
                array[2] === array[4] && array[4] === array[6]||
                array[3] === array[4] && array[4] === array[5]||
                array[6] === array[7] && array[7] === array[8]
                    ){console.log(`The winner is ${playersGo}, game will reset in 6 seconds`)
                        setTimeout(clearArray,3000)
                        setTimeout(display.manualReset, 3000)
                        console.log("clearArray Triggered")
                        return 
                         
                    }
            }
        
    );

    return {Selection,};
});

//instantiate gameBoard Object 
const game = gameboard();









     








