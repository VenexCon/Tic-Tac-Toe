

//consts 
const gridcontainer = document.querySelector(".gridcontainer");
//let currentArray = Array.from(document.querySelector(".gridcontainer"));
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
                }}
            });
    };

    const BoardReset =() => {buttons.addEventListener("click", (e) => {
            if(e.target.id === "resetGame") {
                const cells = Array.from(document.querySelectorAll(".cell"))
                cells.forEach(cell => cell.innerText = ``)};
            }) 
    };
    //modular calls
    BoardReset();
    ConstructDivs();
    
})();



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
    this.currentArray = [];
    const player1 = player("connor", "x");
    const player2 = player("Sona","o");

    const togglePlayer = (() => {if (this.playersGo ==="player1"){
            return playersGo = "player2"
        } else if(playersGo === "player2"){
            return playersGo = "player1"
        }}
    );
    
    const updateArray = (marker) => {currentArray.push(marker)};

    const Selection = () => {gridcontainer.addEventListener("click", (e) => {
        if (playersGo === "player1"){
        e.target.innerText = (player1.marker)
            updateArray(player1.marker);
            return togglePlayer();

         } else if (playersGo ="player2"){
            e.target.innerText = (player2.marker)
            updateArray(player2.marker);
            return togglePlayer();
    }})
    };
    Selection(); // instantiate Selection EL

    return {updateArray, Selection, currentArray};
});


const game = gameboard();













     








