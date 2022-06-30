//consts 

let cells = Array.from(document.querySelectorAll(".cell"));
const gridcontainer = document.querySelector(".gridcontainer");
let currentArray = Array.from(document.querySelector(".gridcontainer"));


const gameboard = (e) => {
    
    const boardReset =() => {
        cells.forEach(cell => cell.innerText = ".");
    };

       return {boardReset};

}

const player = (name) => {
    const getName = () => name;

    const Selection = () => { 
        gridcontainer.addEventListener("click", (e) => {console.log(e.target)});
    };
    return {getName, Selection}
}


const connor = player("connor").Selection()





     








