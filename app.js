

//consts 
const gridcontainer = document.querySelector(".gridcontainer");
const buttons = document.querySelector(".buttonDiv");



//Display Controller 
const DisplayController = (function () {
    
    this.displayStatus = false;

        const ConstructDivs = () => {buttons.addEventListener("click", (e) => {
            if(e.target.id === "startGame" && this.displayStatus === false){
                for (let i = 0; i < 9; i++){let item = document.createElement("DIV");
                    item.setAttribute("index", `${i}`);
                        item.classList.add("cell");
                            gridcontainer.appendChild(item);
                                this.displayStatus = true;
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


        //modular calls
        BoardReset();
        ConstructDivs();
    }
)();

// Player Factory
const player = (name, marker) => {
    
    this.name = name;
    this.marker = marker;
    const getName = () => name;
        
        return {name, marker}
};


//GameBoard controller
const gameboard = (() => {

    this.playersGo = "player1";
    this.currentArray = [0,1,2,3,4,5,6,7,8];
    const player1 = player("connor", "x");
    const player2 = player("Sona","o");

    // Refactoring = const updateArray = (marker) => {currentArray.push(marker)};

    const playerOneArray = () => currentArray.filter(mark => mark === "x");
    const playerTwoArray = () => currentArray.filter(mark => mark === "o" );

    const togglePlayer = (() => {if (this.playersGo ==="player1"){
            return playersGo = "player2"
                } else if(playersGo === "player2"){
                    return playersGo = "player1"
                }}
    );

    const draw = (currentArray) => {if(currentArray.every(index => (typeof index === "string")) === "string")  {
        return console.log("it is a draw")} 
    };

    //const resetGame = (() => {buttons.addEventListener("click", ()=> currentArray = [0,1,2,3,4,5,6,7,8])})();
    
    const Selection = (() => {gridcontainer.addEventListener("click", (e) => {
        if (playersGo === "player1"){
            currentArray[e.target.getAttribute("index")] = player1.marker;
                e.target.innerText = (player1.marker)
                    winnerCheck(currentArray);
                            return togglePlayer()

        } else if (playersGo ="player2"){
               e.target.innerText = (player2.marker)
                currentArray[e.target.getAttribute("index")] = player2.marker;
                    winnerCheck(currentArray);
                            return togglePlayer();
                        }
                    }
                )
            }
    )();

    
    const winnerCheck = ((array) => {if (array.length > 3){
            if (array[0] === array[3] && array[3] === array[6]||
                array[0] === array[1] && array[1] === array[2]||
                array[0] === array[4] && array[4] === array[8]||
                array[1] === array[4] && array[4] === array[7]||
                array[2] === array[4] && array[4] === array[6]||
                array[3] === array[4] && array[4] === array[6]||
                array[6] === array[7] && array[7] === array[8]
                    ){console.log(`The winner is ${playersGo} `)
                        return true; 
                    }
            }
        }
    );



       

    return {Selection, currentArray, playerOneArray, playerTwoArray,draw};
});
//instantiate gameBoard Object 
const game = gameboard();

// left standstill as module to be called by gameBoard object.












     








