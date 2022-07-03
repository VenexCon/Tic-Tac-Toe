

//DOM Grabbs
const gridcontainer = document.querySelector(".gridcontainer");
const buttons = document.querySelector(".buttonDiv");
const resetBtn = document.getElementById("resetGame");
let currentArray = [0,1,2,3,4,5,6,7,8];


const clearArray = () => {return currentArray = [0,1,2,3,4,5,6,7,8];}


//Display Controller , initalised ready for click events
const DisplayController = (function () {

    //display Consts
    const announcementBox = document.getElementById("announcements");
    
    displayStatus = false; // used for ensuring the start button is clicked once.

    // display functions
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
                    clearArray();
                };
            }
        ) 
    };

    const manualReset = function () {
        cells = document.querySelectorAll(".cell");
        cells.forEach(cell => cell.innerText ="");
    };

    const AnnounceWin = () => {
        announcementBox.innerText = `The Winner is ${playersGo}!, congratulations!`
    }

    const AnnounceDraw = () => {
        announcementBox.innerText= `Both Players have Drawn!`
    }

    const resetDisplay =() => {
        announcementBox.innerText = `It Is ${playersGo}'s Go`;
    }

    const activePlayer = () => {
        let player = document.getElementById("active-player")
        player.innerText = `It is ${playersGo}'s Go`
    }


    

    //modular calls
    BoardReset();
    ConstructDivs();
    return {manualReset, AnnounceWin, resetDisplay, AnnounceDraw, activePlayer}
    });

    //instantiate gameBoard
const display= DisplayController();


// Player Factory called during gameBoard() function, two players currently with pre-set values.
const player = (name, marker) => {
    this.name = name;
    this.marker = marker;
    score = 0;
        return {name, marker,score}
};


//GameBoard controller, this controls the game logic and conditional elements.
const gameboard = (() => {

    this.playersGo = "player1";
    const player1 = player("connor", "x");
    const player2 = player("Sona","o");

    //is called in selection function
    const togglePlayer = (() => {if (this.playersGo ==="player1"){
            return playersGo = "player2"
                } else if(playersGo === "player2"){
                    return playersGo = "player1"
                }}
    );

    function completeGrid(index) {return typeof index ==="string"};
    const isDraw = () => {let array = currentArray; return array.every(completeGrid);};

    
    
    const Selection = (() => {gridcontainer.addEventListener("click", (e) => {
        if (playersGo === "player1"){
            if (e.target.innerText === "");{
            currentArray[e.target.getAttribute("index")] = player1.marker;
                e.target.innerText = (player1.marker)
                    winnerCheck(currentArray);
                        DrawCheck();
                            togglePlayer()
                                display.activePlayer();
                        return 
                        }

        } else if (playersGo ="player2"){
            if (e.target.innerText === "");{
            currentArray[e.target.getAttribute("index")] = player2.marker;
               e.target.innerText = (player2.marker)
                    winnerCheck(currentArray);
                        DrawCheck();
                            togglePlayer();
                                display.activePlayer()
                        return 
                            
                        }} return
                    }
                )
            }
    ); Selection();

    // currently is comparing empty cells - 
    const winnerCheck = ((array) => {
            if (array[0] === array[3] && array[3] === array[6]||
                array[0] === array[1] && array[1] === array[2]||
                array[0] === array[4] && array[4] === array[8]||
                array[1] === array[4] && array[4] === array[7]||
                array[2] === array[4] && array[4] === array[6]||
                array[2] === array[5] && array[5] === array[8]||
                array[3] === array[4] && array[4] === array[5]||
                array[6] === array[7] && array[7] === array[8]
                    ){
                        display.AnnounceWin();
                            setTimeout(clearArray,3000)
                                setTimeout(display.manualReset, 3000)
                                    console.log("array Reset");
                                        setTimeout (display.resetDisplay, 3000)
                                            return true;
                         
                    } return false; 
            }
    );

    const DrawCheck = () => {
        if(isDraw() === true) {
            display.AnnounceDraw();
                setTimeout(clearArray,3000)
                setTimeout(display.manualReset, 3000)
        } return console.log("no draw yet");
    }


    return {Selection, playersGo, announcements};
});

//instantiate gameBoard Object 
const game = gameboard();





     








