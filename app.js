

//consts 
const cells = Array.from(document.querySelectorAll(".cell"));
const gridcontainer = document.querySelector(".gridcontainer");
let currentArray = Array.from(document.querySelector(".gridcontainer"));


//GameBoard controller
const gameboard = () => {

    let currentArray = [];

    const boardReset =() => {
        cells.forEach(cell => cell.innerText = ".");
    };

    const updateArray = (marker) => {currentArray.push(marker)};

       return {boardReset, updateArray, currentArray};
};


//instantiate gameBoard
const board = gameboard();

//Player Controller
const player = (name, marker) => {

    marker
    const getName = () => name;

    const Selection = () => { 
        gridcontainer.addEventListener("click", (e) => {
            //console.log(e.target)
            if (e.target.innerText !== "Player Choice"){
            e.target.innerText = (`Player Choice`)
                board.updateArray(marker);
        } else return console.log("already chosen")});

    };
    return {getName, Selection}
};

//instantiante Player
const connor = player("connor", "x").Selection()





     








